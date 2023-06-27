import { describe, expect, it } from 'vitest';
import calculate from './calculate';

describe('calculate должна вычислять выражения', () => {
  it('2 + 3 = 5', () => {
    const exp = '2+3';

    const actual = calculate(exp);

    expect(actual).toBe(5);
  });

  it('5 - 3 = 2', () => {
    const exp = '5-3';

    const actual = calculate(exp);

    expect(actual).toBe(2);
  });

  it('2 * 3 = 6', () => {
    const exp = '2×3';

    const actual = calculate(exp);

    expect(actual).toBe(6);
  });

  it('6 / 3 = 2', () => {
    const exp = '6÷3';

    const actual = calculate(exp);

    expect(actual).toBe(2);
  });

  it('должна вычислить выражение со скобками', () => {
    const exp1 = '6+3×(1+4×5)×2';
    const exp2 = '6+3×(1+4+5)×2';

    const actual1 = calculate(exp1);
    const actual2 = calculate(exp2);

    expect(actual1).toBe(132);
    expect(actual2).toBe(66);
  });
});

describe('calculate должна выбрасывать ошибки', () => {
  it('передано выражение с неправильными скобками', () => {
    const exp1 = '6+3×(1+4×5×2';
    const exp2 = '6+3×1+4+5)×2';

    expect(() => calculate(exp1)).toThrow('A wrong parenthesis sequance');
    expect(() => calculate(exp2)).toThrow('A wrong parenthesis sequance');
  });
});
