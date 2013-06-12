Ext.define('App.store.Contacts', {
    extend : 'Ext.data.Store',

    alias : 'store.contacts',
    requires : ['App.model.Contact'],

    config : {
        model : 'App.model.Contact',
        data  : [
            {
                id        : 1,
                firstname : 'Mel',
                lastname  : 'Gibson',
                phone     : '394-953-4537'
            },
            {
                id        : 2,
                firstname : 'John',
                lastname  : 'Travolta',
                phone     : '357-642-3162'
            },
            {
                id        : 3,
                firstname : 'Sean',
                lastname  : 'Connery',
                phone     : '732-137-6274'
            },
            {
                id        : 4,
                firstname : 'Matt',
                lastname  : 'Damon',
                phone     : '846-427-7352'
            },
            {
                id        : 5,
                firstname : 'Will',
                lastname  : 'Smith',
                phone     : '231-634-2768'
            },
            {
                id        : 6,
                firstname : 'Al',
                lastname  : 'Pacino',
                phone     : '481-523-8552'
            },
            {
                id        : 7,
                firstname : 'Tommy Lee',
                lastname  : 'Jones',
                phone     : '641-131-0913'
            }
        ]
    }
});