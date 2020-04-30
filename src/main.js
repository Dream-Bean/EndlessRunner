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
    killZone: 1160,             // far right of screen
    runnerStart: 3 * 144 - 30,  // y position of runner's start location
    runnerMove: 144,            // runner vertical motion
    // weight: 0,
    highScore: 0,
    manholeSpeed: 6,
    beerSpeed: 3,
    obstacleSpeed: 0,
};

// reserve keyboard variables
let keyUP, keyLEFT, keyRIGHT, keyDOWN, keyF, keyT, keyM , keyP, keyR;