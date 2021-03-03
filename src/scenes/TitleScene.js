import Phaser from 'phaser';
import createButton from '../helpers/buttons';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // show name input
    this.nameInput = document.querySelector('.name-input');
    this.nameInput.classList.toggle('hidden');

    // set background, decoration and logo
    this.add.image(400, 300, 'titleBackground')
      .setDisplaySize(800, 640);

    this.add.image(400, 300, 'logo')
      .setScale(1.27);

    // create buttons
    createButton(400, 440, 'Start Game', this);
    createButton(400, 510, 'Instructions', this);
    createButton(400, 580, 'Leaderboard', this);

    this.input.mouse.disableContextMenu();
    this.input.on('pointerdown', (pointer, gameObjects) => {
      if (pointer.leftButtonDown() && gameObjects.length > 0) {
        switch (gameObjects[0].last.text) {
          case 'Instructions':
            this.nameInput.classList.toggle('hidden');
            this.scene.start('Instructions');
            break;
          case 'Leaderboard':
            this.nameInput.classList.toggle('hidden');
            this.scene.start('Leaderboard');
            break;
          default:
            this.nameInput.classList.toggle('hidden');
            this.scene.start('Game');
        }
      }
    });
  }
}