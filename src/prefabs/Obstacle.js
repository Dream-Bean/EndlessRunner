class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
        this.obstacleSpeed = 6;
    }

    update() {
        // move spaceship left
        this.x += this.obstacleSpeed; //+ this.carAcceleration

        // wraparound screen bounds
        if (this.x > game.config.width) {
            this.x = -100;
            this.obstacleSpeed = 6 //Phaser.Math.Between(6, 10);
        }
    }
}