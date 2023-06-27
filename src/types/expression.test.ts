import { describe, expect, it } from 'vitest';
import { isOperation, isParanthesis } from './expression';

describe('isOperation должна', () => {
  it(`Возращать true при передаче '+', '-', '÷', '×'`, () => {
    const actual = ['+', '-', '÷', '×'].every((sym) => isOperation(sym));

    expect(actual).toBe(true);
  });

  it(`Возращать false при передаче любого другого литерала`, () => {
    const actual = isOperation('b');

    expect(actual).toBe(false);
  });
});

describe('isParanthesis должна', () => {
  it(`Возращать true при передаче '(', ')'`, () => {
    const actual = ['(', ')'].every((sym) => isParanthesis(sym));

    expect(actual).toBe(true);
  });

  it(`Возращать false при передаче любого другого литерала`, () => {
    const actual = isParanthesis('b');

    expect(actual).toBe(false);
  });
});
