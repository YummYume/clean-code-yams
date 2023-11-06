export const getScoreForDices = (dices: number[]) => {
  if (dices.length !== 5) {
    throw new Error('Function getScoreForDices requires exactly 5 dices.');
  }

  const sortedDices = dices.sort();

  // YAMS
  if (sortedDices[0] === sortedDices[4]) {
    return 50;
  }

  return dices.reduce((sum, dice) => sum + dice, 0);
}
