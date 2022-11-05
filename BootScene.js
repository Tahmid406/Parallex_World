class BootScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    // Background
    for (let i = 0; i < 12; i++) {
      this.load.image(`bg_layer${i}`, `./assets/Background/Background layers/Layer_${i}.png`);
    }

    //Player
    // this.load.spritesheet("playerMove", "./Knight/KnightRun.png", {
    //   frameWidth: 96,
    //   frameHeight: 64,
    // });
    // this.load.spritesheet("playerIdle", "./Knight/KnightIdle.png", {
    //   frameWidth: 64,
    //   frameHeight: 64,
    // });
  }

  create() {
    this.add.text(20, 20, "Loading Game...");
    this.scene.start("playGame");

    // this.anims.create({
    //   key: "player_move",
    //   frames: this.anims.generateFrameNumbers("playerMove"),
    //   frameRate: 10,
    //   repeat: -1,
    // });
    // this.anims.create({
    //   key: "player_idle",
    //   frames: this.anims.generateFrameNumbers("playerIdle"),
    //   frameRate: 10,
    //   repeat: -1,
    // });
  }
}
