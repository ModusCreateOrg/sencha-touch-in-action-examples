Ext.define('App.view.phone.Main', {
    extend   : 'App.view.Main',

    requires : [
        'Ext.layout.Card'
    ],

    config : {

        layout : 'card',

        control : {
            'button[ui=back]' : {
                tap : 'onMainBackButtonTap'
            }
        }
    },

    initialize : function() {
        var me = this;
        me.add({
            xtype : 'contacts',
            store : {
                type : 'contacts'
            }
        });

        me.down('toolbar').add({
            xtype  : 'button',
            text   : 'Back',
            ui     : 'back',
            hidden : true
        });

        me.callParent();
    },

    onMainBackButtonTap : function(btn) {
        var me = this,
            activeItem = me.getActiveItem();

        me.fireEvent('back', me, activeItem, btn);
    }
});