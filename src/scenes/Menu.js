class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    // load menu assets
    preload() {

    }

    create() {
        // place tile sprite
        //this.menuscreen = this.add.tileSprite(0, 0, 1280, 720, 'menuscreen').setOrigin(0, 0);

        // borders
        this.add.rectangle(0, 0, 1280, 32, 0xFF0000).setOrigin(0, 0); // left
        this.add.rectangle(0, 690, 1280, 32, 0xFF0000).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 32, 720, 0xFF0000).setOrigin(0, 0); // top
        this.add.rectangle(1248, 0, 32, 720, 0xFF0000).setOrigin(0, 0); // right

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
        let textSpacer = 64;
        this.add.text(centerX, centerY - 2 * textSpacer, 'SalaryMan', menuConfig).setScale(1.5, 1.5).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Press (F) To Start Playing!', menuConfig).setOrigin(0.5);

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
    }
}
