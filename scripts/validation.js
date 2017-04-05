(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;


    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },

        emailDuplicate: function(email) {
            var url = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
            $.get(url + '/' + email, function(serverResponse) {
                if (serverResponse == null) {
                    return true;
                } else {
                    return false;
                }
            });

        },

        isDecaf: function(string, int) {
            if (/decaf/.test(string) && int > 20) {
                return false;
            } else {
                return true;
            }
        }
    };



    App.Validation = Validation;
    window.App = App;
})(window);
