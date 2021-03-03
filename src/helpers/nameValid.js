const nameValidation = playername => {
  if (playername.trim() === '') {
    return 'Militia';
  }

  return playername.trim();
};

export { nameValidation as default };