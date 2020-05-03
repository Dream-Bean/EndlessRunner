class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    // load menu assets
    preload() {

    }

    create() {
        // borders
        this.add.rectangle(0, 0, 1280, 32, 0xFF00FF).setOrigin(0, 0); // left
        this.add.rectangle(0, 690, 1280, 32, 0xFF00FF).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 32, 720, 0xFF00FF).setOrigin(0, 0); // top
        this.add.rectangle(1248, 0, 32, 720, 0xFF00FF).setOrigin(0, 0); // right

        // text display
        let menuConfig = {
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

        // show menu text
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;
        this.add.text(centerX, centerY - 200, ' Salary Man ', menuConfig).setScale(1.5, 1.5).setOrigin(0.5);
        this.add.text(centerX, centerY, ' ~ Press P To Play ~ ', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 35, ' ~ Press T For Tutorial ~ ', menuConfig).setOrigin(0.5);

        // define keys
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            //this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyT)) {
            //this.sound.play('sfx_select');
            this.scene.start("tutorialScene");
        }
    }
}
