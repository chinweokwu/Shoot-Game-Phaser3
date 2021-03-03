import Phaser from 'phaser';
import createButton from '../helpers/buttons';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    // set background and logo
    this.add.image(400, 320, 'instructBg')
      .setDisplaySize(800, 640);

    this.add.image(380, 120, 'logo')
      .setScale(1.10);


    this.add.graphics()
      .fillStyle(0x222222, 1.6)
      .fillRect(120, 330, 630, 165);

    const instructions = ` Alien SpaceShips are tryinig to invade Earth.
 Use space key to shoot and W,A,S,D, 
 as direction key to move your warship 
 and defend earth. May the force be with you!`;

    this.add.text(180, 350, instructions, {
      fontSize: '20px',
      fill: '#fff',
    });

    createButton(380, 580, 'Main Menu', this);

    this.input.mouse.disableContextMenu();
    this.input.on('pointerdown', (pointer, gameObjects) => {
      if (pointer.leftButtonDown() && gameObjects.length > 0) {
        if (gameObjects[0].last.text === 'Main Menu') {
          this.scene.start('Title');
        }
      }
    });
  }
}