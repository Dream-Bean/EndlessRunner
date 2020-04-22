class Beer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
    }

    update() {
        // move spaceship left
        this.x += game.settings.spaceshipSpeed;

        // wraparound screen bounds
        if (this.x >= 0 + this.width) {
            this.x = game.config.width;
        }
    }

    /*
    reset() {
        this.x = game.config.width;
    }
    */
}