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
        var form = this.getDetails();

        /**
         * Set values to fields
         */
        form.setRecord(record);
    },
    onSaveButtonTap : function() {
        this.persistContact();
    }
});