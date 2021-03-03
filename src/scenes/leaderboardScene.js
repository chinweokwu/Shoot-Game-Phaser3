import Phaser from 'phaser';
import createButton from '../helpers/buttons';
import loadScoreboard from '../helpers/loadscoreboard';
import { getResults } from '../helpers/scores';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    // retrive score data from the api
    getResults().then(scores => loadScoreboard(scores, this));

    // set background and logo
    this.add.image(400, 320, 'background')
      .setDisplaySize(800, 640);

    this.add.image(380, 70, 'logo')
      .setScale(0.87);

    createButton(350, 580, 'Main Menu', this);

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