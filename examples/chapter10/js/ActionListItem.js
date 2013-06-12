Ext.define('Ext.ux.ActionListItem', {
    extend : 'Ext.dataview.component.ListItem',
    xtype  : 'actionlistitem',

    config : {
        actionsEl : null,

        actionsTpl : [
            '<div class="flexbox">',
                '<tpl for=".">',
                    '<div class="list-action list-icon {.}" action="{.}"> </div>',
                '</tpl>',
                '<span class="target-dismiss list-icon remove_2" action="dismiss"> </span>',
            '</div>'
        ].join('')
    },

    applyActionsTpl : function(config) {
        if (typeof config == 'string') {
            return Ext.create('Ext.XTemplate', config);
        }
    },

    initialize : function() {
        var me        = this,
            myElement = me.element;

        me.callParent();

        myElement.on({
            scope : me,
            tap   : 'onElementTap'
        });

        myElement.on({
            scope     : me,
            drag      : 'onDrag',
            dragend   : 'onDragEnd',
            delegate  : '.x-list-item-inner'
        });
    },

    onElementTap : function(eventObj) {
        var me     = this,
            action = eventObj.target.getAttribute('action');

        if (action) {
            if (action != 'dismiss') {
                me.fireEvent('actiontap', me, action, me.getRecord());
            }
            me.hideActions();
        }

        if (me.getActionsEl()) {
            eventObj.stopEvent();
        }
    },

    onDrag : function(event) {
        var me     = this,
            currX  = event.getXY()[0],
            prevX  = me.prevX || currX,
            deltaX = currX - prevX,
            initX  = me.initialDragX,
            moveToX;

        me.prevX = currX;

        // Horizontal Dragging
        if (Math.abs(deltaX) >= 5) {
            me.isDraggingHorizontal = true;

            if (! initX) {
                me.initialDragX = currX;
            }

            if (currX < initX) {
                me.dragDirection = 'left';
                moveToX = currX - initX;
            }
            else if (currX > initX) {
                me.dragDirection = 'right';
                moveToX = Math.abs(currX - initX);
            }

            me.fireEvent('horizontaldrag', me, moveToX);
        }
    },

    showActions : function(actions, moveToX) {
        var me                = this,
            itemDockBody      = me.element.down('.x-dock-body'),
            itemTextElCt      = itemDockBody.down('.x-list-item-inner'),
            itemTextElCtStyle = itemTextElCt.dom.style,
            itemActionsEl     = me.getActionsEl(),
            actionsTpl        = me.getActionsTpl();

        itemTextElCt.addCls('opaque-list-item');

        if (! itemActionsEl) {
            itemActionsEl = actionsTpl.append(itemDockBody, actions);
            itemActionsEl = Ext.get(itemActionsEl);
            me.setActionsEl(itemActionsEl);

            itemTextElCtStyle.webkitTransitionTimingFunction = 'ease-out';
            itemTextElCtStyle.webkitTransitionProperty = 'translate3d';
            itemTextElCtStyle.webkitTransitionDuration = '.05s';
        }

        itemActionsEl.setWidth(itemTextElCt.getWidth());

        itemTextElCtStyle.webkitTransform = 'translate3d(' + moveToX  +  'px, 0, 0)';
    },

    onDragEnd  : function() {
        if (! this.dragDirection) {
            return;
        }

        var me              = this,
            itemDockBody    = me.element.down('.x-dock-body'),
            dockBodyWidth   = itemDockBody.getWidth(),
            itemTextElCt    = itemDockBody.down('.x-list-item-inner'),
            itemTextElCtDom = itemTextElCt.dom,
            itemTextElStyle = itemTextElCtDom.style,
            moveToX         = dockBodyWidth;

        if (me.isDraggingHorizontal) {
            me.fireEvent('horizontaldragend', me);
        }

        if (me.dragDirection === 'left') {
            moveToX *= -1;
        }

        itemTextElStyle.webkitTransitionDuration = '.20s';
        itemTextElStyle.webkitTransform = 'translate3d(' + moveToX  +  'px, 0, 0)';

        delete me.prevX;
        delete me.isDraggingHorizontal;
        delete me.initialDragX;
        delete me.dragDirection;
    },


    hideActions : function() {
        if (! this.getActionsEl()) {
            return;
        }

        var me                 = this,
            itemDockBody       = me.element.down('.x-dock-body'),
            itemTextElCt       = itemDockBody.down('.x-list-item-inner'),
            itemTextElCtDom    = itemTextElCt.dom,
            itemTextElCtStyle  = itemTextElCtDom.style,
            transitionListener = function() {

                itemTextElCtDom.removeEventListener('webkitTransitionEnd', transitionListener);
                itemTextElCtStyle.webkitTransitionDuration = '0s';

                itemTextElCt.removeCls('opaque-list-item');
                me.clearActionsEl();
            };

        itemTextElCtDom.addEventListener('webkitTransitionEnd', transitionListener);

        itemTextElCtStyle.webkitTransform = 'translate3d(0,0,0)';
    },

    clearActionsEl : function() {
        Ext.destroy(this.getActionsEl());
        this.setActionsEl(null) ;
    }
});