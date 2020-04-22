class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
    }

    update() {

        // add direction tracking using flip

        // horizontal motion
        if (keyRIGHT.isDown) { // && this.x >= 47) { border checking
            this.x += game.settings.playerSpeed;
            this.setScale(-1, 1);
        } else if (keyLEFT.isDown) { // && this.x <= 578) {
            this.x -= game.settings.playerSpeed;  
            this.setScale(1, 1);
        }

        // vertical motion
        if (keyUP.isDown) {
            this.y -= game.settings.playerSpeed;
        } else if (keyDOWN.isDown) {
            this.y += game.settings.playerSpeed; // temporary?
            //slide
        }

        // checkpoint interaction
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //weight drop and point gain
        }
    }
}