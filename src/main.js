// screen configuration
let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    scene: [Menu, Play],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {

};

// reserve keyboard variables
let keyUP, keyLEFT, keyRIGHT, keyDOWN, keyF;