class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
        this.isJumping = false;
        this.isSliding = false;
    }

    update() {

        // gravity
        if (this.y <= game.settings.platformHeight) {
            this.y += 3;
        }

        // kill zone
        if (this.x <= game.settings.killZone) {
            this.x += game.settings.playerSpeed;
        }

        //if (game.settings.platformHeight + 50 <= this.y <= game.settings.platformHeight - 50) {
        //    this.isJumping = false;
        //}

        // if player y position == resting
            // isJumping = false


        // player motion
        if (keyRIGHT.isDown) { // && this.x >= 47) { border checking
            this.x += game.settings.playerSpeed;
            this.setScale(-1, 1);
            this.isSliding = false;
            this.isJumping = false;
        } else if (keyLEFT.isDown) { // && this.x <= 578) {
            this.x -= game.settings.playerSpeed;  
            this.setScale(1, 1);
            this.isSliding = false;
            this.isJumping = false;
        } else if (keyUP.isDown && this.isJumping == false) {
            this.y -= 100;
        } else if (keyDOWN.isDown && this.isSliding == false) {
            this.y += 50; // temporary?
            //slide
        }

        // checkpoint interaction
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //weight drop and point gain
        }
    }
}