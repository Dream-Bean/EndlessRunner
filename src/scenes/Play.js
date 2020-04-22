class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('runner', './assets/runner.png');
        this.load.image('beer', './assets/beer.png');
    }

    create() {
        // place tile sprite
        //this.backdrop = this.add.tileSprite(0, 0, 640, 480, 'tbd').setOrigin(0, 0);

        // borders
        this.add.rectangle(0, 0, 1280, 32, 0xFF0000).setOrigin(0, 0); // left
        this.add.rectangle(0, 690, 1280, 32, 0xFF0000).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 32, 720, 0xFF0000).setOrigin(0, 0); // top
        this.add.rectangle(1248, 0, 32, 720, 0xFF0000).setOrigin(0, 0); // right

        // add player
        this.player = new Player(this, game.config.width/2 - 15, 431, 'runner').setOrigin(0, 0);
        // add beer
        this.beer = new Beer(this, game.config.width / 2 - 15, 431, 'beer').setScale(0.2, 0.2).setOrigin(0, 0);

        // define keyboard keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update() {
        // update runner
        this.player.update();

    }
}