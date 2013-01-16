Ext.define('MyApp.PersonStore', {
    extend   : 'Ext.data.Store',
    alias    : 'store.personstore',
    requires : [ 'MyApp.PersonModel' ],
    config   : {
        model    : 'MyApp.PersonModel',
        proxy    : {
            type   : 'jsonp',
            url    : 'http://extjsinaction.com/dataQuery.php',
            limit  : 20,
            reader : {
                type         : 'json',
                rootProperty : 'records'
            }
        }
    }
});
