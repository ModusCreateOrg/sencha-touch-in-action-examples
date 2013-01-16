Ext.define('Ext.ux.FieldsetCollapser', {
    extend : 'Ext.Component',
    alias  : 'plugin.fieldsetcollapser',

    config : {
        collapsed       : false,
        body            : null,
        indicatorEl     : null,
        initialCollapse : false,
        bodyHeight      : null
    },

    applyCollapsed : function(collapsed) {
        var me = this,
            fieldsetBody = me.getBody();

        if (collapsed && ! fieldsetBody) {
            me.setInitialCollapse(collapsed);
        }
        else if (fieldsetBody) {
            me.doCollapse(collapsed);
        }


        return collapsed;
    },

    init : function(parent) {
        var me        = this,
            title     = parent.down('title'),
            body      = parent.element.down('.x-dock-body'),
            titleEl   = title.element,
            bodyStyle = body.dom.style,
            indicatorEl,
            bodyHeight;

        setTimeout(function() {
            bodyHeight = body.getHeight();
            me.setBodyHeight(bodyHeight);

            if (me.getInitialCollapse()) {
                bodyStyle.height = 0;
                me.updateIndicator('+');
            }
            else {
                bodyStyle.height =  bodyHeight + 'px';
            }

        }, 1);

        titleEl.on({
            scope : me,
            tap   : 'onTitleTap'
        });

        indicatorEl = Ext.Element.create({
            style : "font-weight: bold; float: left; width: 16px;"
        });

        indicatorEl.setHtml('-');

        titleEl.down('.x-innerhtml').insertFirst(indicatorEl);

        me.setIndicatorEl(indicatorEl);
        me.setBody(body);

        body.setStyle({
            '-webkit-transition-property' : 'height',
            '-webkit-transition-duration' : '.5s'
        });

        parent.setCollapsed = Ext.Function.bind(me.setCollapsed, me);
    },

    onTitleTap : function() {
        this.setCollapsed(! this.getCollapsed())
    },

    doCollapse : function(collapsed) {
        var me         = this,
            body       = me.getBody(),
            bodyStyle  = body.dom.style,
            origHeight = me.getBodyHeight(),
            indicator  = '-',
            height     = 0;

        if (collapsed) {
            indicator = '+';
        }
        else {
            height = origHeight + 'px';
        }

        bodyStyle.height = height;
        me.updateIndicator(indicator);
    },

    updateIndicator : function(val) {
        this.getIndicatorEl().setHtml(val);
    }
});