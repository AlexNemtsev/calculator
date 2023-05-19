import { expect, it } from 'vitest';
import parseInfixExpression from './parse-infix-expression';
import { Expression } from '../types/expression';

it('Should parse an infix expression into postfix expression', () => {
  const expression: Expression[] = [6, '+', 3, '×', '(', 1, '+', 4, '×', 5, ')', '×', 2];

  const expected: Expression[] = [6, 3, 1, 4, 5, '×', '+', '×', 2, '×', '+'];

  const result = parseInfixExpression(expression);

  expect(result).toEqual(expected);
});

it('Should correctly parse expression wo times before "(" and after ")"', () => {
  const expression: Expression[] = [6, '+', 3, '(', 1, '+', 4, '×', 5, ')', 2];

  const expected: Expression[] = [6, 3, 1, 4, 5, '×', '+', '×', 2, '×', '+'];

  const result = parseInfixExpression(expression);

  expect(result).toEqual(expected);
});

it('Should throw Error when wrong parenthesis are passed', () => {
  const expression1: Expression[] = [6, '+', 3, '(', 1, '+', 4, '×', 5, 2];
  const expression2: Expression[] = [6, '+', 3, 1, '+', 4, '×', 5, ')', 2];

  expect(() => parseInfixExpression(expression1)).toThrow('A wrong parenthesis sequance');
  expect(() => parseInfixExpression(expression2)).toThrow('A wrong parenthesis sequance');
});
