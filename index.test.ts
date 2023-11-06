import { describe, expect, test } from 'bun:test';

import { getScoreForDices } from '.';

describe('getScoreForDices returns correct score', () => {
  test('No figure should return sum of dices', () => {
    const score = getScoreForDices([1, 3, 5, 6, 2]);

    expect(score).toBe(17);
  });

  test('YAMS should return 50', () => {
    const score = getScoreForDices([6, 6, 6, 6, 6]);

    expect(score).toBe(50);
  });

  test('Grande suite should return 40', () => {
    const score = getScoreForDices([2, 3, 4, 5, 6]);

    expect(score).toBe(40);
  });

  test('Brelan should return 28', () => {
    const score = getScoreForDices([1, 1, 6, 2, 1]);

    expect(score).toBe(28);
  });

  test('Carré should return 35 ', () => {
    const score = getScoreForDices([1, 1, 1, 2, 1]);

    expect(score).toBe(35);
  });

  test('Full should return 30', () => {
    const score = getScoreForDices([2, 1, 1, 1, 2]);

    expect(score).toBe(30);
  });
});
