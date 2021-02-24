var config = {
    // How long Waves effect duration 
    // when it's clicked (in milliseconds)
    duration: 1000,

    // Delay showing Waves effect on touch
    // and hide the effect if user scrolls
    // (0 to disable delay) (in milliseconds)
    delay: 100
};

// Initialise Waves with the config
Waves.init(config);
Waves.attach('button', ['waves-button', 'waves-float']);
Waves.attach('#info_box', 'waves-light');

var finder_active = false;
var login_active = true;

function show_finder() {
    var shower = document.getElementById('info_box');
    if (finder_active) {
        shower.classList.remove('show');
        shower.classList.add('hide');
        finder_active = false;
    } else {
        shower.classList.remove('hide');
        shower.classList.add('show');
        finder_active = true;
    }
}

function show_login() {
    var shower = document.getElementById('login_box');
    if (login_active) {
        shower.classList.remove('show');
        shower.classList.add('hide');
        login_active = false;
    } else {
        shower.classList.remove('hide');
        shower.classList.add('show');
        login_active = true;
    }
}

function bind_login() {
    var app = angular.module('loginApp', []);
    app.controller('loginCtrl', function($scope) {
        $scope.nickname = "";
    });
}
bind_login();