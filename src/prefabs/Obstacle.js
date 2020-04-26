class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
        this.carSpeed = 5;
    }

    update() {
        // move spaceship left
        this.x += this.carSpeed; //+ this.carAcceleration

        // wraparound screen bounds
        if (this.x > game.config.width) {
            this.x = -100;
            this.carSpeed = Phaser.Math.Between(5, 12);
        }
    }
}