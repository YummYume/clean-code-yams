import { describe, expect, test } from "bun:test";

import { getScoreForDices } from ".";

describe('getScoreForDices returns correct score', () => {
  test('No figure should return sum of dices', () => {
    const score = getScoreForDices([1, 2, 3, 4, 5]);

    expect(score).toBe(15);
  });
});
