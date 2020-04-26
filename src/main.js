// screen configuration
let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    /*
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false,
        },
    },      
    */
    scene: [Menu, Tutorial, Play],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    carSpeed: 4,
    platformHeight: 555,
    killZone: 1210 - 120,
};

// reserve keyboard variables
let keyUP, keyLEFT, keyRIGHT, keyDOWN, keyF, keyT, keyM , keyP, keyR;