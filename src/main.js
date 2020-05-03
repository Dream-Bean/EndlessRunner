// screen configuration
let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    fps: {
        target: 60,
        forceSetTimeOut: true
    }, 
    pixelArt: true,
    scene: [Menu, Tutorial, Play],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    killZone: 1160,             // far right of screen
    // weight: 0,
    highScore: 0,
    globalSpeed: 6,
};

// reserve keyboard variables
let keyUP, keyLEFT, keyRIGHT, keyDOWN, keyF, keyT, keyM , keyP, keyR;