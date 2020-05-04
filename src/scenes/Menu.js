class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    // load menu assets
    preload() {
        this.load.image('gamelogo', './assets/gamelogo.png');
        this.load.image('botbg', './assets/street.png');
        this.load.image('topbg', './assets/finalsw.png');
    }

    create() {
        // Place tile sprite
        this.wpTop = this.add.tileSprite(0, 0, 632, 70, 'topbg').setScale(4, 4).setOrigin(0, 0);
        this.wpBot = this.add.tileSprite(0, 283, 316, 108, 'botbg').setScale(4.1, 4).setOrigin(0, 0);
        this.logo = this.add.tileSprite(game.config.width / 2, game.config.height / 2 - 150, 179, 67, 'gamelogo').setScale(2, 2).setOrigin(0.5);
        // Borders
        this.add.rectangle(0, 0, 1280, 5, 0x000000).setOrigin(0, 0); // left
        this.add.rectangle(0, 715, 1280, 5, 0x000000).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 5, 720, 0x000000).setOrigin(0, 0); // top
        this.add.rectangle(1275, 0, 5, 720, 0x000000).setOrigin(0, 0); // right  

        // text display
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            color: '#FFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;
        this.add.text(centerX, centerY + 110, 'Press F To Play', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 160, 'Press T For Tutorial', menuConfig).setOrigin(0.5);

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update() {
        // Tile scrolling
        this.wpTop.tilePositionX -= game.settings.globalSpeed / 4;
        this.wpBot.tilePositionX -= game.settings.globalSpeed / 4;

        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyT)) {
            //this.sound.play('sfx_select');
            this.scene.start("tutorialScene");
        }
    }
}
