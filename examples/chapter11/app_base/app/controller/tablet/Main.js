Ext.define('App.controller.tablet.Main', {
    extend: 'App.controller.Main',

    config : {
        control : {
             'button[itemId=saveDetails]' : {
                tap : 'onSaveButtonTap'
            }
        }
    },

    showContactDetails: function(record) {
        this.getDetails().setRecord(record);
    },
    onSaveButtonTap : function() {
        this.persistContact();
    }
});