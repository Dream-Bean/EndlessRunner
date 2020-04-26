class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('runner', './assets/runner.png');
        this.load.image('beer', './assets/beer.png');
        this.load.image('tempbg', './assets/newbg.png');
        this.load.image('car', './assets/car.png');
    }

    create() {
        // place tile sprite
        this.map = this.add.tileSprite(0, 0, 1280, 720, 'tempbg').setScale(5, 4).setOrigin(0, 0);

        // borders
        this.add.rectangle(0, 0, 1280, 16, 0xFF0000).setOrigin(0, 0); // left
        this.add.rectangle(0, 705, 1280, 16, 0xFF0000).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 16, 720, 0xFF0000).setOrigin(0, 0); // top
        this.add.rectangle(1265, 0, 16, 720, 0xFF0000).setOrigin(0, 0); // right
        // tracks
        this.add.rectangle(0, 655, 1280, 10, 0xFF0000).setOrigin(0, 0); 
        this.add.rectangle(0, 605, 1280, 10, 0xFF0000).setOrigin(0, 0); 
        this.add.rectangle(0, 555, 1280, 10, 0xFF0000).setOrigin(0, 0);
        this.add.rectangle(0, 505, 1280, 10, 0xFF0000).setOrigin(0, 0);
        this.add.rectangle(0, 455, 1280, 10, 0xFF0000).setOrigin(0, 0);
        
        // define keyboard keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // add player
        this.player = new Player(this, game.config.width/2, 475, 'runner').setOrigin(0, 0);
        // add beer
        this.beer = new Beer(this, game.config.width / 2 - 45, 445, 'beer').setScale(0.3, 0.3).setOrigin(0, 0);
        // add obstacle
        this.car = new Obstacle(this, game.config.width / 4, 555, 'car').setOrigin(0, 0); //scale doesnt change hitbox

        //this.player.physics;
        //this.arcade.setBounds(0, 0, game.config.width, game.config.height);
        //this.player.setCollideWorldBounds(true);

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
        /*
        if (this.player.x >= game.settings.killZone) {
            this.player.alpha = 0;
            this.gameOver = true;
        }
        */

        // Game Over and Scene Swap
        if (this.gameOver == true) {
            this.add.text(this.centerX, this.centerY, 'Press (M) To Return To Menu!', this.playConfig).setOrigin(0.5);
            this.add.text(this.centerX, this.centerY - this.textSpacer, 'Press (R) To Restart!', this.playConfig).setOrigin(0.5);
            if (keyR.isDown) {
                this.scene.start("playScene");
            }
            if (keyM.isDown) {
                this.scene.start("menuScene");
            }
        }

        // check collisions
        if (this.checkCollision(this.player, this.car)) {
            this.playerKilled(this.player);
        }
        if (this.checkCollision(this.player, this.beer)) {
            
        }


        if (!this.gameOver) {
            this.player.update();
        }

    


    }

    // Axis-Aligned Bounding Boxes checking
    checkCollision(player, object) {
        if (player.x < object.x + object.width &&
            player.x + player.width > object.x &&
            player.y < object.y + object.height &&
            player.height + player.y > object.y) {
            return true;
        } else {
            return false;
        }
    }

    playerKilled(player) {
        player.alpha = 0;
        //kill animation and sound
        this.gameOver = true;
    }

    // detector for drinks
    playerBAL(player) {
        // drunkenness
        // point tally
    }

    // point turn-in + alcohol relief
    checkpointReached(player, checkpoint) {
        
    }
    
}