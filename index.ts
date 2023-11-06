const YAMS = 50 as const;
const GRANDE_SUITE = 40 as const;
const BRELAN = 28 as const;
const CARRE = 35 as const;

type Dice = 1 | 2 | 3 | 4 | 5 | 6;
type Dices = [Dice, Dice, Dice, Dice, Dice];

const isYams = (dices: Dices) => dices[0] === dices[4];

const isGrandeSuite = (dices: Dices) => {
  let previousDiceResult = dices[0];

  for (const dice of dices.slice(1)) {
    if (dice !== previousDiceResult + 1) {
      return false;
    }

    previousDiceResult = dice;
  }

  return true;
};

const isBrelan = (dices: Dices) => dices[0] === dices[2] || dices[1] === dices[3] || dices[2] === dices[4];

const isCarre = (dices: Dices) => dices[0] === dices[3] || dices[1] === dices[4];

export const getScoreForDices = (dices: Dices) => {
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

  // Carré
  if (isCarre(sortedDices)) {
    return CARRE;
  }

  // Brelan
  if (isBrelan(sortedDices)) {
    return BRELAN;
  }

  return dices.reduce((sum, dice) => sum + dice, 0);
}
