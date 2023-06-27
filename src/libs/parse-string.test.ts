import { expect, test } from 'vitest';
import parseString from './parse-string';
import { Expression } from '../types/expression';

test(`parseString должна превратить строку корректное выражение`, () => {
  const str = '6+3×(1+4×5)×2';

  const actual = parseString(str);
  const expected: Expression[] = [6, '+', 3, '×', '(', 1, '+', 4, '×', 5, ')', '×', 2];

  expect(actual).toEqual(expected);
});
