class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('runner', './assets/runner.png');
        this.load.image('beer', './assets/beer.png');
        this.load.image('obstacle', './assets/roadbarrier.png');
        this.load.image('manhole', './assets/manhole.png');
        this.load.image('botbg', './assets/road.png');
        this.load.image('topbg', './assets/finalsw.png');
    }

    create() {
        // Place tile sprite
        this.wpTop = this.add.tileSprite(0, 0, 632, 70, 'topbg').setScale(4, 4).setOrigin(0, 0);
        this.wpBot = this.add.tileSprite(0, 280, 316, 108, 'botbg').setScale(4.1, 4).setOrigin(0, 0);

        1
        // Define keyboard keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // Add checkpoint
        this.manhole = new Checkpoint(this, -100, 360 + 105 - 144, 'manhole').setScale(1.5, 1.5).setOrigin(0, 0);
        // Add beer
        this.beer = new Beer(this, 790, 360 + 90, 'beer').setScale(1.5, 1.5).setOrigin(0, 0);
        // Add barriers
        this.barrier0 = new Obstacle(this, 0, 288 -45, 'obstacle').setScale(3, 3).setOrigin(0, 0);
        this.barrier1 = new Obstacle(this, -450, 288 + 144 -45, 'obstacle').setScale(3, 3).setOrigin(0, 0);
        this.barrier2 = new Obstacle(this, -100, 288 + 2 * 144 -45, 'obstacle').setScale(3, 3).setOrigin(0, 0);
        // Add player
        this.player = new Player(this, 1000, 3 * 144 - 45, 'runner').setScale(2, 2.25).setSize(100, 100).setOrigin(0, 0);
        //this.player.setDebugBodyColor(0x0000FF);

        // Conditions
        this.gameOver = false;
        this.isManholeTimer = false;
        this.isBeerTimer = false;
        this.positionChecker = true;
        this.isVomiting = false;
        // Score
        this.weight = 0;
        this.points = 0;

        // Text
        this.playConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FF0000',
            color: '#000',
            align: 'right',
            padding: {
                top: 2,
                bottom: 2,
            },
            fixedWidth: 0
        }
        this.centerX = game.config.width / 2;
        this.centerY = game.config.height / 2;
        this.textSpacer = 64;

        // High score display
        this.highScore = this.add.text(5, 5, "High Score: " + game.settings.highScore, this.playConfig);
        // Score board
        this.score = this.add.text(5, 35, "Score: 0", this.playConfig);
        // Borders
        this.add.rectangle(0, 0, 1280, 5, 0x00FFFF).setOrigin(0, 0); // left
        this.add.rectangle(0, 715, 1280, 5, 0x00FFFF).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 5, 720, 0x00FFFF).setOrigin(0, 0); // top
        this.add.rectangle(1275, 0, 5, 720, 0x00FFFF).setOrigin(0, 0); // right    
    }

    update() {
        this.wpBot.tilePositionX -= 2;
        this.wpTop.tilePositionX -= 1;

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

        // Manhole spawner
        if (this.isManholeTimer == false) {
            this.isManholeTimer = true;
            // 5-second timer
            this.manholeTimer = this.time.delayedCall(5000, () => {
                this.isManholeTimer = false;
                this.manhole.x = -50;
                this.manhole.manholeStart = true;
                this.manhole.spawn();
            }, null, this);
        }
        // Beer spawner
        if (this.isBeerTimer == false) {
            this.isBeerTimer = true;
            // 5-second timer
            this.beerTimer = this.time.delayedCall(8000, () => {
                this.isBeerTimer = false;
                this.beer.x = -50;
                this.beer.alpha = 1;
                this.beer.spawn();
            }, null, this);
        }

        // Check collisions
        if (this.checkCollision(this.player, this.barrier0)) {
            this.playerHit(this.player, this.barrier0);
        }
        if (this.checkCollision(this.player, this.barrier1)) {
            this.playerHit(this.player, this.barrier1);
        }
        if (this.checkCollision(this.player, this.barrier2)) {
            this.playerHit(this.player, this.barrier2);
        }
        if (this.checkCollision(this.player, this.beer)) {
            this.playerDrink(this.beer);
        }
        if (this.checkCollision(this.player, this.manhole) && keyF.isDown) {
            //put delayed call here?
            this.playerVomit();
            this.isVomiting = true;
        } else {
            this.isVomiting = false;
        }

        // Update objects
        if (!this.gameOver) {
            this.player.update();
            this.beer.update();
            this.manhole.update();
            this.barrier0.update();
            this.barrier1.update();
            this.barrier2.update();
        }

        // Increase high score and repaint (if applicable)
        if (this.points > game.settings.highScore) {
            game.settings.highScore = this.points;
            this.highScore.text = "High Score: " + game.settings.highScore;
        }

        // Player x-movement
        if (this.player.x <= game.config.width / 2 + 100 && this.isVomiting == false) {
            this.positionChecker = true;
        } else if (this.player.x > game.config.width / 2 && this.isVomiting == false) {
            this.positionChecker = false;
        }
        if (this.positionChecker == false && this.isVomiting == false &&
            !this.checkCollision(this.player, this.barrier0) &&
            !this.checkCollision(this.player, this.barrier1) &&
            !this.checkCollision(this.player, this.barrier2)) {
            this.player.x -= 0.5;
        }
        if (this.isVomiting == true) {
            this.player.x += game.settings.manholeSpeed;
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

    // Player-car reaction
    playerHit(player) {
        player.x += 6;
        //kill animation and sound
    }

    // Player-drink reaction
    playerDrink(drink) {
        this.weight++;
        drink.alpha = 0;
        drink.x += 300;
        // add drunkenness mechanic later
    }

    playerVomit() { //play with it when i get animations
        console.log(this.weight);
        if (this.weight > 0) {
            this.weight--;
            this.points++;
            this.score.text = "Score: " + this.points;
        }
    }

    // make a fcn to boop checkpoint back 100m if touching car
        //same for other objects

        
    //note: beers add some kind of effect

    // Point turn-in + drunken haze
    checkpointReached(player, checkpoint) {
        //
    }
    
}