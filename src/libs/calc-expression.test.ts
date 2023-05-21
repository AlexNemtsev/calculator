import { describe, expect, it } from 'vitest';
import calcExpression from './calc-expression';
import { Expression } from '../types/expression';

describe('calcExpression must calculate simple expressions', () => {
  it('Should sum 2 + 3 = 5', () => {
    const exp: Expression[] = [2, '+', 3];

    const actual = calcExpression(exp);

    expect(actual).toBe(5);
  });

  it('Should subtract 5 - 3 = 2', () => {
    const exp: Expression[] = [5, '-', 3];

    const actual = calcExpression(exp);

    expect(actual).toBe(2);
  });

  it('Should multiply 2 * 3 = 6', () => {
    const exp: Expression[] = [2, '×', 3];

    const actual = calcExpression(exp);

    expect(actual).toBe(6);
  });

  it('Should divide 6 / 3 = 2', () => {
    const exp: Expression[] = [6, '÷', 3];

    const actual = calcExpression(exp);

    expect(actual).toBe(2);
  });

  it('Shoulc calc long expressions', () => {
    const exp1: Expression[] = [6, '+', 3, '×', '(', 1, '+', 4, '×', 5, ')', '×', 2];
    const exp2: Expression[] = [6, '+', 3, '×', '(', 1, '+', 4, '+', 5, ')', '×', 2];

    const actual1 = calcExpression(exp1);
    const actual2 = calcExpression(exp2);

    expect(actual1).toBe(132);
    expect(actual2).toBe(66);
  });
});
