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
            xtype : 'contacts'
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
        this.fireEvent('back', this, btn);
    }
});