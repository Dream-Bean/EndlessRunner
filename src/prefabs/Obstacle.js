class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to existing scene, displayList, updateList
        this.rowStartB = 0;
    }

    update() {
        // move spaceship left
        this.x += game.settings.globalSpeed; //+ this.carAcceleration

        // wraparound screen bounds
        if (this.x > game.config.width) {
            this.x = -100 //Phaser.Math.Between(100, 700);  //-100;
            //this.obstacleSpeed = 6 //Phaser.Math.Between(6, 10);
            this.rowMove();
        }
    }

    rowMove() {
        this.rowStartB = Phaser.Math.Between(0, 2);
        if (this.rowStartB == 0) {
            this.y = 288 + 25;
        } else if (this.rowStartB == 1) {
            this.y = 288 + 25 + 144;
        } else if (this.rowStartB == 2) {
            this.y = 288 + 25 + 2 * 144;
        }
    }
}