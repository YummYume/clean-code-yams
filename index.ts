const YAMS = 50 as const;
const GRANDE_SUITE = 40 as const;
const BRELAN = 28 as const;
const CARRE = 35 as const;
const FULL = 30 as const;

export type Dice = 1 | 2 | 3 | 4 | 5 | 6;
export type Dices = [Dice, Dice, Dice, Dice, Dice];

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

const isFull = (dices: Dices) => {
  if (!isBrelan(dices)) {
    return false;
  }

  const remainingDices = dices.filter(dice => dice !== dices[2]);

  return remainingDices[0] === remainingDices[1];
}

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

  // Full
  if (isFull(sortedDices)) {
    return FULL;
  }

  // Brelan
  if (isBrelan(sortedDices)) {
    return BRELAN;
  }

  return dices.reduce((sum, dice) => sum + dice, 0);
}

export const throwDices = (...dices: Dices[]) => dices.reduce((sum, dices) => sum + getScoreForDices(dices), 0)
