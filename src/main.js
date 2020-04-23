// screen configuration
let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    scene: [Menu, Tutorial, Play],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    playerSpeed: 2,
    platformHeight: 555,
    killZone: 1210,
};

// reserve keyboard variables
let keyUP, keyLEFT, keyRIGHT, keyDOWN, keyF, keyT, keyM , keyP;