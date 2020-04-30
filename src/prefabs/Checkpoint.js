class Checkpoint extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
    }

    // set a timer in play to spawn it every t amount of time

    update() {
        // move spaceship left
        this.x += game.settings.manholeSpeed

    }

    reset() {
        this.x = 0;
    }
}