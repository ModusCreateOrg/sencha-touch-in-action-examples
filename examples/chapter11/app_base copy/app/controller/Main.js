Ext.define('App.controller.Main', {
    extend : 'Ext.app.Controller',

    config : {
        refs : {
            mainView : 'main',
            contacts : 'contacts',
            details  : 'contactdetails'
        },

        control : {
            contacts : {
                select : 'onContactSelect'
            }
        },

        views : [
            'ContactsList',
            'ContactDetails'
        ]
    },

    onContactSelect : function(list, record) {
        this.showContactDetails(record);
    },

    persistContact : function() {
        var details = this.getDetails(),
            record = details.getRecord();

        if (!record) {
            return;
        }
        record.beginEdit();
        record.set(details.getValues());
        record.commit();
    },

    /**
     * Override for each profile
     */
    showContactDetails : Ext.emptyFn
});