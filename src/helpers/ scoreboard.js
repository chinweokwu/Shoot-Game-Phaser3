const loadScoreboard = (scores, game) => {
  game.add.graphics()
    .fillStyle(0x222222, 2.6)
    .fillRect(160, 140, 460, 380);

  const header = `
          Leaderboard\n
  Player               Score`;

  const [one] = scores;

  const scoreList = `  ${one.score}\n
 
 
  `;
  const playerList = `  ${one.user}\n

`;

  game.add.text(150, 125, header, {
    fontSize: '22px',
    fill: '#fff',
  });

  game.add.text(460, 250, scoreList, {
    fontSize: '20px',
    fill: '#fff',
  });

  game.add.text(160, 250, playerList, {
    fontSize: '20px',
    fill: '#fff',
  });
};

export { loadScoreboard as default };
