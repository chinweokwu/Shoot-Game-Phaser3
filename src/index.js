import Phaser from 'phaser';
import './assets/styles.css';
import config from './config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import instructions from './scenes/instructionScene';
import leaderboard from './scenes/leaderboardScene';
import SceneGameOver from './scenes/GameOver';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Instructions', instructions);
    this.scene.add('Leaderboard', leaderboard);
    this.scene.add('Game', GameScene);
    this.scene.add('SceneGameOver', SceneGameOver);
    this.scene.start('Boot');
  }
}

window.game = new Game();
