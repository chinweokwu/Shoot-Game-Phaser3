import Phaser from 'phaser';
import background from '../assets/bg.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('background', background);
  }

  create() {
    this.scene.start('Preloader');
  }
}
