Ext.define('App.model.Contact', {
    extend : 'Ext.data.Model',

    config : {
        fields : [
            {name : 'firstname', type : 'auto'},
            {name : 'lastname', type : 'auto'},
            {name : 'phone', type : 'auto'}
        ]
    }
});