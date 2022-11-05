const backgroundSpeed = [0, 0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3.5, 3.5, 4.75, 5];

class GameScene extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    //Background
    this.background = [];
    for (let i = 11; i >= 0; i--) {
      this.background.push(this.add.tileSprite(0, 0, config.width, config.height, `bg_layer${i}`));
      this.background[this.background.length - 1].setOrigin(0, 0);
    }

    //Player
    // this.player = this.add.sprite(config.width / 2, config.height - 80, "playerIdle");
    // this.player.scale = 1.5;
    // this.player.play("player_move");
  }

  moveBackground(forward = true) {
    let speedModifier = 0.5;
    if (!forward) speedModifier *= -1;
    this.background[11].tilePositionX += 5 * speedModifier;
    this.background[10].tilePositionX += 4.75 * speedModifier;
    this.background[9].tilePositionX += 3.5 * speedModifier;
    this.background[8].tilePositionX += 3.5 * speedModifier;
    this.background[7].tilePositionX += 2.5 * speedModifier;
    this.background[6].tilePositionX += 2 * speedModifier;
    this.background[5].tilePositionX += 1.5 * speedModifier;
    this.background[4].tilePositionX += 1 * speedModifier;
    this.background[3].tilePositionX += 0.5 * speedModifier;
    this.background[2].tilePositionX += 0.25 * speedModifier;
  }

  update() {
    this.moveBackground();
  }
}
