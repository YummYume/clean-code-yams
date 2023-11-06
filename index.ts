const YAMS = 50 as const;
const GRANDE_SUITE = 40 as const;

const isYams = (dices: number[]) => dices[0] === dices[4];

const isGrandeSuite = (dices: number[]) => {
  let previousDiceResult = dices[0];

  for (const dice of dices.slice(1)) {
    if (dice !== previousDiceResult + 1) {
      return false;
    }

    previousDiceResult = dice;
  }

  return true;
};

export const getScoreForDices = (dices: number[]) => {
  if (dices.length !== 5) {
    throw new Error('Function getScoreForDices requires exactly 5 dices.');
  }

  const sortedDices = dices.sort();

  // YAMS
  if (isYams(sortedDices)) {
    return YAMS;
  }

  // Grande suite
  if (isGrandeSuite(sortedDices)) {
    return GRANDE_SUITE;
  }

  return dices.reduce((sum, dice) => sum + dice, 0);
}
