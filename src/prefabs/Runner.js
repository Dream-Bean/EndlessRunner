class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
        this.positionTracker = 0;
        this.isMid = false;
        this.isBot = false;
        this.hitbox;
        this.weight = 0;
    }

    update() {
        // player hitbox
        this.hitbox = this.y;
        console.log(this.hitbox);

        // player motion
        if (Phaser.Input.Keyboard.JustDown(keyUP) && this.positionTracker != 1) {
            this.y -= 144;
            this.positionTracker++;
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN) && this.positionTracker != -1) {
            this.y += 144;
            this.positionTracker--;
        }

        // test movement only ←→
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.x -= 100;
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.x += 100;
        }

        //have a constant height checker and use that for the collission box


        // checkpoint interaction
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //weight drop and point gain
        }
    }
}