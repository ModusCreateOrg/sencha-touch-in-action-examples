Ext.define('Ext.ux.ActionList', {
    extend   : 'Ext.dataview.List',
    xtype    : 'actionlist',

    requires : [ 'Ext.ux.ActionListItem' ],

    config : {
        defaultType        : 'actionlistitem',
        actions            : null,
        currentActionsItem : null,

        control : {
            'container > actionlistitem' : {
                actiontap         : 'onActionItemTap',

                // Custom events fired by ActionListItem
                horizontaldrag    : 'onItemHorizontalDrag',
                horizontaldragend : 'onItemHorizontalDragEnd'
            }
        }
    },

    initialize : function() {
        var me = this;
        me.callParent();

        me.getScrollable().getScroller().on({
            scope  : me,
            scroll : 'onScrollClearActionsEl'
        });

        me.on({
            scope  : me,
            select : 'onItemSelectClearActionsEl'
        });
    },

    onItemHorizontalDrag : function(item, moveToX) {
        var me          = this,
            scrollable  = me.getScrollable(),
            scroller    = scrollable.getScroller(),
            currActions = me.getCurrentActionsItem();

        scroller.setDisabled(true);
        scrollable.hideIndicators();

        item.showActions(this.getActions(), moveToX);

        if (currActions != item) {
            me.onScrollClearActionsEl();
        }
        me.deselectAll();
        me.setCurrentActionsItem(item);
    },

    onItemHorizontalDragEnd : function() {
        var scrollable = this.getScrollable(),
            scroller   = scrollable.getScroller();

        scroller.setDisabled(false);
    },

    onScrollClearActionsEl : function() {
        var me          = this,
            actionItem  = me.getCurrentActionsItem();

        if (actionItem) {
            actionItem.hideActions();
            me.setCurrentActionsItem(null);
        }
    },

    onItemSelectClearActionsEl  : function() {
        this.onScrollClearActionsEl();
    },

    onActionItemTap : function(listItem, action, record) {
        var me = this;

        me.setCurrentActionsItem(null);
        me.deselectAll();

        me.fireEvent('actiontap', me, listItem, action, record);
    }
});
