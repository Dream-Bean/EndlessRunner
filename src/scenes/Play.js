class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('runner', './assets/runner.png');
        this.load.image('beer', './assets/beer.png');
        this.load.image('tempbg', './assets/tempbg.png');
        this.load.image('obstacle', './assets/obstacle.png');
    }

    create() {
        // place tile sprite
        this.backdrop = this.add.tileSprite(0, 0, 1280, 720, 'tempbg').setScale(1.4, 1.9).setOrigin(0, 0);

        // borders
        this.add.rectangle(0, 0, 1280, 16, 0xFF0000).setOrigin(0, 0); // left
        this.add.rectangle(0, 705, 1280, 16, 0xFF0000).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 16, 720, 0xFF0000).setOrigin(0, 0); // top
        this.add.rectangle(1265, 0, 16, 720, 0xFF0000).setOrigin(0, 0); // right
        
        // define keyboard keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        // add player
        this.player = new Player(this, game.config.width/2 - 15, 431, 'runner').setOrigin(0, 0);
        // add beer
        this.beer = new Beer(this, game.config.width / 2 - 15, 431, 'beer').setScale(0.4, 0.4).setOrigin(0, 0);

        // conditions
        this.gameOver = false;

        this.playConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FACADE',
            color: '#000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.centerX = game.config.width / 2;
        this.centerY = game.config.height / 2;
        this.textSpacer = 64;
        
    }

    update() {
        // update runner
        this.player.update();

        if (this.player.x >= game.settings.killZone) {
            this.player.alpha = 0;
            this.gameOver = true;
        }

        if (this.gameOver == true) {
            this.add.text(this.centerX, this.centerY, 'Press (M) To Return To Menu!', this.playConfig).setOrigin(0.5);
        }

        if (this.gameOver == true && keyM.isDown) {
            this.scene.start("menuScene");
        }

    }
    
}