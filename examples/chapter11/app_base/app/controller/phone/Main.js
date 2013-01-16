Ext.define('App.controller.phone.Main', {
    extend: 'App.controller.Main',

    config : {
        anims : {
            next : {
                type      : 'slide',
                direction : 'left'
            },
            previous :  {
                type      : 'slide',
                direction : 'right'
            }
        },
        control :{
            main : {
                back : 'onMainBackButton'
            }
        }
    },

    showContactDetails: function(record) {
        var me             = this,
            mainView       = me.getMainView(),
            contactsList   = me.getContacts(),
            lastName       = record.get('lastname'),
            firstName      = record.get('firstname'),
            contactDetails = mainView.down('contactdetails'),
            nextAnim       = me.getAnims().next;

        if (! contactDetails) {
            contactDetails = mainView.add({
                xtype      : 'contactdetails',
                hideFields : false
            });
        }
        
        contactDetails.setRecord(record);

        mainView.setTitle(firstName + ' ' + lastName);
        mainView.down('[ui=back]').show();
        mainView.animateActiveItem(contactDetails, nextAnim);

        Ext.defer(contactsList.deselectAll, 1, contactsList);
    },
    onMainBackButton : function(mainView, btn) {
        var me       = this,
            contacts = mainView.down('contacts');

        me.persistContact();

        mainView.setTitle('Contacts');
        btn.hide();
        mainView.animateActiveItem(contacts, me.getAnims().previous);
    }
});