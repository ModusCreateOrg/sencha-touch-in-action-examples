Ext.define('App.profile.Phone', {
    extend : 'Ext.app.Profile',

    config : {
        controllers : [
            'Main'
        ],
        views : [
            'Main'
        ]
    },

    isActive : function() {
        return true;
        return Ext.os.is('Phone');
    },

    launch : function() {
        Ext.create('App.view.phone.Main');
    }
});