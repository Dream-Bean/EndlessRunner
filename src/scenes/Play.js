class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('runner', './assets/runner.png');
        this.load.image('beer', './assets/beer.png');
        this.load.image('tempbg', './assets/newestbg.png');
        this.load.image('car', './assets/car.png');
        this.load.image('cop', './assets/cop.png');
    }

    create() {
        // place tile sprite
        this.city = this.add.tileSprite(0, 0, 1280, 288, 'tempbg').setScale(1, 1).setOrigin(0, 0);
        //this.add.rectangle(0, 0, 1280, 288, 0x000FFF).setOrigin(0, 0); // left

        // tracks
        this.add.rectangle(0, 288, 1280, 5, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 288 + 144, 1280, 5, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 288 + 2*144, 1280, 5, 0xFFFFFF).setOrigin(0, 0);
        // cops
        this.add.sprite(1210, 288 + 15, 'cop').setScale(1, 1).setScale(0.75,0.75).setOrigin(0, 0);
        this.add.sprite(1210, 288 + 144, 'cop').setScale(1, 1).setScale(0.75, 0.75).setOrigin(0, 0);
        this.add.sprite(1210, 288 + 2*144, 'cop').setScale(1, 1).setScale(0.75, 0.75).setOrigin(0, 0);
        // hitbox notes 
        this.add.rectangle(800, 216 + 81, 25, 25, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(800, 360 + 81, 25, 25, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(800, 504 + 81, 25, 25, 0xFFFFFF).setOrigin(0, 0);

        
        // define keyboard keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // add player
        this.player = new Player(this, 1000, 2*144 + 72, 'runner').setSize(100,100).setOrigin(0, 0); // .setSize(x,y) and .setScale
        // add beer
        this.beer = new Beer(this, 790, 360 + 75, 'beer').setScale(0.3, 0.3).setSize(20, 20).setOrigin(0, 0);
        // add obstacle
        this.car = new Obstacle(this, 490, 288 + 2*144 - 50, 'car').setOrigin(0, 0); //scale doesnt change hitbox

        //this.player.physics;
        //this.arcade.setBounds(0, 0, game.config.width, game.config.height);
        //this.player.setCollideWorldBounds(true);

        // conditions
        this.gameOver = false;
        // score
        this.points = 0;

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
        this.score = this.add.text(69, 54, this.points, this.playConfig);

        this.centerX = game.config.width / 2;
        this.centerY = game.config.height / 2;
        this.textSpacer = 64;

        // borders
        this.add.rectangle(0, 0, 1280, 5, 0xFF00FF).setOrigin(0, 0); // left
        this.add.rectangle(0, 715, 1280, 5, 0xFF00FF).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 5, 720, 0xFF00FF).setOrigin(0, 0); // top
        this.add.rectangle(1275, 0, 5, 720, 0xFF00FF).setOrigin(0, 0); // right    
    }

    update() {
        // Killed by edge
        if (this.player.x >= game.settings.killZone) {
            this.player.alpha = 0;
            this.gameOver = true;
        }

        // Game over and scene swap
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

        // Check collisions
        if (this.checkCollision(this.player, this.car)) {
            this.playerHit(this.player, this.car);
        }
        if (this.checkCollision(this.player, this.beer)) {
            this.playerDrink(this.beer);
        }


        if (!this.gameOver) {
            this.player.update();
            this.car.update();
        }

        this.city.tilePositionX -= 4;
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

    // player-car reaction
    playerHit(player) {
        player.x += 100;
        //car.reset();
        //kill animation and sound
    }

    // player-drink reaction
    playerDrink(drink) {
        this.points++;
        this.score.text = this.points;
        drink.reset();
        // add drunkenness mechanic later
    }

    // point turn-in + alcohol relief
    checkpointReached(player, checkpoint) {
        //
    }
    
}