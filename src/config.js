import Phaser from 'phaser';

export default
{
  type: Phaser.AUTO,
  width: 800,
  height: 640,
  scene: {
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};