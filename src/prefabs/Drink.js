class Beer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
        this.rowStartD = 1;
    }

    update() {
        this.x += game.settings.beerSpeed
    }

    spawn() {
        this.rowStartD = Phaser.Math.Between(0, 2);
        if (this.rowStartD == 0) {
            this.y = 360 + 105 - 144;
        } else if (this.rowStartD == 1) {
            this.y = 360 + 105;
        } else if (this.rowStartD == 2) {
            this.y = 360 + 105 + 144;
        }
    }

    reset() {
        this.x += 300;
        
    }
}