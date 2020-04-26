class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
        this.isJumping = false;
        this.isSliding = false;
        this.weight = 0;
    }

    update() {
        // player motion
        if (Phaser.Input.Keyboard.JustDown(keyUP) && this.y > 440 && this.y < 700) {
            this.y -= 50;
            //this.isJumping = true;
        } else if (Phaser.Input.Keyboard.JustDown(keyDOWN) && this.y > 420 && this.y < 615) {
            this.y += 50; // temporary?
            //this.isSliding = true;
            //this.setScale(0.5,0.5).setOrigin(0,0);
            //slide
        }
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.x -= 40;
        }
        



        /*
        // kill zone
        if (this.x <= game.settings.killZone) {
            this.x += game.settings.playerSpeed;
        }

        // gravity and jumping
        if (this.y <= game.settings.platformHeight) {
            this.y += 3;
        }
        if (this.y > game.settings.platformHeight) {
            this.isJumping = false;
        }

        // sliding
        if (this.y >= game.settings.platformHeight) {
            //
        }
        if (this.y < game.settings.platformHeight) {
            this.isSliding = false;
        }

        // player motion
        //this.x += game.settings.playerSpeed;
        if (keyUP.isDown && this.isJumping == false) {
            this.y -= 150;
            this.isJumping = true;
        } else if (keyDOWN.isDown && this.isSliding == false) {
            this.y += 50; // temporary?
            this.isSliding = true;
            //this.setScale(0.5,0.5).setOrigin(0,0);
            //slide
        }
        */

        // checkpoint interaction
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //weight drop and point gain
        }
    }
}