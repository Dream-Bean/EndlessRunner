class Tutorial extends Phaser.Scene {
    constructor() {
        super("tutorialScene");
    }

    // load tutorial assets
    preload() {

    }

    create() {
        // borders
        this.add.rectangle(0, 0, 1280, 32, 0xFF00FF).setOrigin(0, 0); // left
        this.add.rectangle(0, 690, 1280, 32, 0xFF00FF).setOrigin(0, 0); // bottom
        this.add.rectangle(0, 0, 32, 720, 0xFF00FF).setOrigin(0, 0); // top
        this.add.rectangle(1248, 0, 32, 720, 0xFF00FF).setOrigin(0, 0); // right

        // text display
        let tutorialConfig = {
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

        // show tutorial text
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;
        let textSpacer = 64;
        this.add.text(centerX, centerY - 2*textSpacer, 'Tutorial', tutorialConfig).setScale(1.5, 1.5).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Controls: ← → ↑ ↓', tutorialConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'Dodge cars and collect beers, but more\n importantly do not get caught by the cops', tutorialConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 2*textSpacer, 'Press (P) To Start Playing!', tutorialConfig).setOrigin(0.5);

        // define keys
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            //this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
    }
}
