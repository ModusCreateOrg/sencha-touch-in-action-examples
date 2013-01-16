Ext.define('Ext.ux.ActionList', {
    extend   : 'Ext.dataview.List',
    xtype    : 'actionlist',

    requires : [ 'Ext.ux.ActionListItem' ],

    config : {
        defaultType        : 'actionlistitem',
        actions            : null,
        currentActionItem : null,

        control : {
            'container > actionlistitem' : {
                actiontap : 'onActionItemTap'
            }
        }
    },

    initialize : function() {
        var me = this;
        me.callParent();

        me.on({
            scope     : me,
            itemswipe : 'onItemSwipeShowActions',
            itemtap   : 'clearActionsEl'
        });

//        debugger;

        me.getScrollable().getScroller().on({
            scope  : me,
            scroll : 'clearActionsEl'
        });
    },

    onItemSwipeShowActions : function(view, idx, itemCmp, rec, evt) {
        var me             = this,
            innerContainer = me.getInnerItems()[0],
            listItems      = innerContainer.getItems().items,
            index          = 0,
            numItems       = listItems.length,
            translatable   = me.getScrollable().getScroller().getTranslatable();

        translatable.stopAnimation();

        for (; index < numItems; index++) {
            listItems[index].hideActions();
        }

        me.deselectAll();

        itemCmp.showActions(me.getActions());

        me.setCurrentActionItem(itemCmp);
    },

    clearActionsEl : function() {
        var me           = this,
            actionItem  = this.getCurrentActionItem(),
            translatable = me.getScrollable().getScroller().getTranslatable();

        if (actionItem) {
            me.setCurrentActionItem(null);
            actionItem.hideActions();
        }
    },
    onActionItemTap : function(listItem, action, record) {
        var me = this;

        me.setCurrentActionItem(null);
        me.fireEvent('actiontap', me, listItem, action, record)
    }
});
