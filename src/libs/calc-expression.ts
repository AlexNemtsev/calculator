import { Expression, Operation } from '../types/expression';
import parseInfixExpression from './parse-infix-expression';

const operations: {
  [key in Operation]: (a: number, b: number) => number;
} = {
  '+': (a: number, b: number): number => a + b,
  '-': (a: number, b: number): number => a - b,
  '×': (a: number, b: number): number => a * b,
  '÷': (a: number, b: number): number => a / b,
};

const calcExpression = (expression: Expression[]): number => {
  const stack: number[] = [];
  const parsed: Expression[] = parseInfixExpression(expression);

  parsed.forEach((lit) => {
    if (typeof lit === 'number') {
      stack.push(lit);
    } else if (lit in operations) {
      const b = stack.pop() as number;
      const a = stack.pop() as number;

      stack.push(operations[lit as Operation](a, b));
    }
  });

  return stack[0];
};

export default calcExpression;
