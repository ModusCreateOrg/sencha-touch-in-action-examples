Ext.define('MyApp.PersonList', {
    extend   : 'Ext.List',
    xtype    : 'personlist',
    requires : [ 'MyApp.PersonStore' ],
    config   : {
        allowDeselect : false,
        itemTpl       : '{lastname}, {firstname}',
        store         : {
            type     : 'personstore',
            autoLoad : true
        },
        items         : [
            {
                xtype  : 'toolbar',
                title  : 'People',
                docked : 'top'
            }
        ],
        listeners     : {
            painted : function () {
                this.getStore().load();
            }
        }
    }
});
