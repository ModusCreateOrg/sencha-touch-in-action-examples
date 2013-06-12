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

    onItemHorizontalDrag : function(item, moveToX) {},

    onItemHorizontalDragEnd : function() {},

    onScrollClearActionsEl : function() {},

    onItemSelectClearActionsEl  : function() {},

    onActionItemTap : function(listItem, action, record) {}
});
