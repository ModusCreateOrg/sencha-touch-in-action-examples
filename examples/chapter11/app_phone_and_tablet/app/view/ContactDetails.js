Ext.define('App.view.ContactDetails', {
    extend : 'Ext.form.Panel',
    xtype  : 'contactdetails',

    requires : [
        'Ext.form.FieldSet'
    ],

    config : {
        items : {
            xtype : 'fieldset',
            title : 'Contact details',

            defaults : {
                xtype          : 'textfield',
                labelWidth     : '30%',
                autoCapitalize : true
            },

            items : [
                {
                    name  : 'firstname',
                    label : 'First'
                },
                {
                    name  : 'lastname',
                    label : 'Last'
                },
                {
                    name  : 'phone',
                    label : 'Phone'
                }
            ]
        }
    }
});