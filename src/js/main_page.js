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

var finder_active = false;

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