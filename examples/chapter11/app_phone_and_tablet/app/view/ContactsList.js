Ext.define('App.view.ContactsList', {
    extend : 'Ext.dataview.List',
    xtype  : 'contacts',

    requires : [ 'App.store.Contacts' ],

    config : {
        itemTpl : '{firstname} {lastname}',
        store   : {
            type : 'contacts'
        }
    }
});