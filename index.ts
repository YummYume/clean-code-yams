export const getScoreForDices = (dices: number[]) => {
  if (dices.length !== 5) {
    throw new Error('Function getScoreForDices requires exactly 5 dices.');
  }

  return dices.reduce((sum, dice) => sum + dice, 0);
}
