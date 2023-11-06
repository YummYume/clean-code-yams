import { describe, expect, test } from "bun:test";

import { getScoreForDices } from ".";

describe('getScoreForDices returns correct score', () => {
  test('No figure should return sum of dices', () => {
    const score = getScoreForDices([1, 3, 5, 7, 9]);

    expect(score).toBe(25);
  });

  test('YAMS should return 50', () => {
    const score = getScoreForDices([6, 6, 6, 6, 6]);

    expect(score).toBe(50);
  });

  test('Grande suite should return 40', () => {
    const score = getScoreForDices([2, 3, 4, 5, 6]);

    expect(score).toBe(40);
  });
});
