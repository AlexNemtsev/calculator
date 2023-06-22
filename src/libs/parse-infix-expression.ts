import { Expression, Operation } from '../types/expression';

const checkParenthesis = (expression: Expression[]): Expression[] | never => {
  let balance = 0;
  const error = new Error('A wrong parenthesis sequance');

  expression.forEach((lit, i) => {
    if (lit === '(') {
      balance++;
      if (typeof expression[i - 1] === 'number') {
        expression.splice(i, 0, '×');
        balance--;
      }
    } else if (lit === ')') {
      balance--;
      if (typeof expression[i + 1] === 'number') {
        expression.splice(i + 1, 0, '×');
      }
    }

    if (balance < 0) throw error;
  });

  if (balance) throw error;

  return expression;
};

const parseInfixExpression = (expression: Expression[]): Expression[] => {
  const inserted = checkParenthesis(expression);

  const answer: Expression[] = [];

  const operations: Expression[] = [];

  const priorities: {
    [key in Operation]: number;
  } = {
    '+': 1,
    '-': 1,
    '×': 2,
    '÷': 2,
  };

  // Все приведения к типу Expression возможны благодоря проверке длины массива на 0
  inserted.forEach((lit) => {
    if (typeof lit === 'number') answer.push(lit);
    else if (lit === '(') {
      operations.push(lit);
    } else if (lit === ')') {
      while (operations.at(-1) !== '(' && operations.length) {
        answer.push(operations.pop() as Expression);
      }
      operations.pop();
    } else if (lit in priorities) {
      while (operations.length && priorities[operations.at(-1) as Operation] >= priorities[lit]) {
        answer.push(operations.pop() as Expression);
      }
      operations.push(lit);
    }
  });

  while (operations.length) {
    answer.push(operations.pop() as Expression);
  }

  return answer;
};

export default parseInfixExpression;
