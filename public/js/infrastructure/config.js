'use strict';

angular.module('myApp').factory('config', function Config() {
    var env = (function () {
        var url = window.document.URL;

        if (url.indexOf('http://127.0.0.1') === 0 || url.indexOf('http://localhost') === 0 ) {
            return 'development';
        }

       
      

    })();

    if (!env) {
        throw new Error('failed to detect application env');
    }

    return window.config[env];
});
