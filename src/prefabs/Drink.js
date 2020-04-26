class Beer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
    }

    update() {
        // move drink left
        this.x += game.settings.beerSpeed

        // wraparound screen bounds
        if (this.x > game.config.width) {
            this.x = -100;
        }
    }

    reset() {
        this.x = 20;
    }
}