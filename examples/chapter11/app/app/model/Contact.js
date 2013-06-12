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

// If we were to write this by hand, we would do it like the following:

//Ext.define('App.model.Contact', {
//    extend : 'Ext.data.Model',
//
//    config : {
//        fields : [
//            'firstname',
//            'lastname',
//            'phone'
//        ]
//    }
//});