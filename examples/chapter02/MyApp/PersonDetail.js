Ext.define('MyApp.PersonDetail', {
    extend : 'Ext.form.Panel',
    xtype  : 'persondetail',
    config : {

        items: [
            {
                xtype       : 'fieldset',
                defaultType : 'textfield',
                defaults  : {
                    labelWidth : 100
                },
                items       : [
                    {
                        label : 'First',
                        name  : 'firstname'
                    },
                    {
                        label : 'Last',
                        name  : 'lastname'
                    },
                    {
                        label : 'Street',
                        name  : 'street'
                    },
                    {
                        label : 'City',
                        name  : 'city'
                    },
                    {
                        label : 'State',
                        name  : 'state'
                    },
                    {
                        label : 'Zip',
                        name  : 'zip'
                    }
                ]
            },
            {
                xtype  : 'toolbar',
                title  : 'Person Details',
                docked : 'top'
            }
        ]
    }
});
