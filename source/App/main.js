requirejs.config({
    paths: {
         'text': 'durandal/amd/text'
    },
    config: {
        i18n: {
            locale: localStorage.getItem('locale') || 'en-us',
        }
    }
});

define(function(require) {
    var app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator'),
        system = require('durandal/system'),
        router = require('durandal/plugins/router'),
        resource = require('localization/resource');
    
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Starter Kit';
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();
        
        //configure routing
        router.useConvention();
        
        router.mapNav('welcome', 'viewmodels/welcome', resource.Welcome);
        router.mapNav('flickr','viewmodels/flickr', resource.Flickr);

        app.adaptToDevice();
        
        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});