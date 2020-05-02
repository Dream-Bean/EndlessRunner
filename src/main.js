// screen configuration
let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    /*
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0,
            }
        },
    },      
    */
    pixelArt: true,
    scene: [Menu, Tutorial, Play],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    killZone: 1160,             // far right of screen
    // weight: 0,
    highScore: 0,
    manholeSpeed: 4,
    beerSpeed: 5,
    obstacleSpeed: 0,
};

// reserve keyboard variables
let keyUP, keyLEFT, keyRIGHT, keyDOWN, keyF, keyT, keyM , keyP, keyR;