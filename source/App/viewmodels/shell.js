define(function(require) {
    var router = require('durandal/plugins/router'),
        app = require('durandal/app');

    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        changeLocale:function(val) {
            //app.showMessage('Change Locale to ...' + val);
            localStorage.setItem('locale',val);
            location.reload();
        },
        activate: function () {
            return router.activate('welcome');
        }
    };
});