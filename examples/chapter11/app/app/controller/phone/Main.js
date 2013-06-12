Ext.define('App.controller.phone.Main', {
    extend: 'App.controller.Main',

    config : {
        views : ['App.view.phone.Main'],
        anims : {
            next : {
                type      : 'slide',
                direction : 'left'
            },
            previous :  {
                type      : 'slide',
                direction : 'right'
            }
        }
    },


    showContactDetails: function(record) {
        var main           = this.getMainView(),
            contactsList   = this.getContacts(),
            lastName       = record.get('lastname'),
            firstName      = record.get('firstname'),
            contactDetails = main.down('contactdetails');

        if (! contactDetails) {
            contactDetails = main.add({
                xtype      : 'contactdetails',
                hideFields : false
            });
        }
        
        contactDetails.setRecord(record);

        main.animateActiveItem(contactDetails, this.getAnims().next);
        main.setTitle(firstName + ' ' + lastName);
        main.down('[ui=back]').show();

        Ext.defer(contactsList.deselectAll, 1, contactsList);
    },
    onMainBackButton : function() {
        var me       = this,
            main     = me.getMainView(),    // NEW
            contacts = main.down('contacts');

        me.persistContact();

        main.setTitle('Contacts');
        main.animateActiveItem(contacts, me.getAnims().previous);
        main.down('[ui=back]').hide();
    }
});