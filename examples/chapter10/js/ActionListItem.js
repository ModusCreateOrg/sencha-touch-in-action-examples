Ext.define('Ext.ux.ActionListItem', {
    extend     : 'Ext.dataview.component.ListItem',
    xtype      : 'actionlistitem',

    config     : {
        activeItem  : 0,

        layout     : {
            type : 'card'
        },

        actionsTpl : [
            '<div class="flexbox">',
                '<tpl for=".">',
                    '<div class="list-action list-icon {.}" action="{.}"> </div>',
                '</tpl>',
                '<span class="target-dismiss list-icon remove_2" action="dismiss"> </span>',
            '</div>'
        ].join('')
    },

    applyActionsTpl : function(cfg) {
        if (typeof cfg == 'string') {
            return Ext.create('Ext.XTemplate', cfg);
        }
    },

    initialize : function() {
        var me        = this,
            myElement = me.element;

        me.callParent();
        myElement.down('.x-list-item-inner').removeCls('x-layout-card');

        me.getAt(0).element.removeCls('x-layout-card-item');

        myElement.on({
            tap      : 'onActionTap',
            scope    : me,
            delegate : '.list-icon'
        });
    },

    onActionTap : function(eventObj) {
        var me = this,
            action = eventObj.target.getAttribute('action');

        if (action != 'dismiss') {
            me.fireEvent('actiontap', me, action, me.getRecord());
        }
        me.hideActions();
    },

    showActions : function(actions) {
        var me   = this,
            item = me.down('actions');

        if (! item) {
            item = me.add({
                xtype  : 'component',
                itemId : 'actions',
                tpl    : me.getActionsTpl(),
                data   : actions
            });

            item.element.removeCls('x-card-item');
        }

        me.animateActiveItem(item, 'slide');
    },

    hideActions : function() {
        this.animateActiveItem(this.getAt(0), {
            type      : 'slide',
            direction : 'right',
            duration  : 50
        });
    }
});