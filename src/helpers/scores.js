const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fI75PnUYKpPRYIl5whzs/scores';
const axios = require('axios');

const submitResults = (playername, kills) => {
  if (kills <= 0) {
    return;
  }

  const score = { user: playername, score: kills };

  axios(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

const getResults = async () => {
  const data = await fetch(URL);
  const results = await data.json();
  const board = [];

  results.result
    .sort((i, j) => (i.score > j.score ? -1 : 1))
    .forEach(val => {
      if (board.every(score => score.user !== val.user) && board.length < 5) {
        board.push(val);
      }
    });

  return board;
};

export { submitResults, getResults };