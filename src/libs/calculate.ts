import { Expression, Operation, isOperation, isParanthesis } from '../types/expression';

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
  const priorities: {
    [key in Operation]: number;
  } = {
    '+': 1,
    '-': 1,
    '×': 2,
    '÷': 2,
  };

  const inserted = checkParenthesis(expression);

  const answer: Expression[] = [];

  const operations: Expression[] = [];

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

const calcExpression = (expression: Expression[]): number => {
  const operations: {
    [key in Operation]: (a: number, b: number) => number;
  } = {
    '+': (a: number, b: number): number => a + b,
    '-': (a: number, b: number): number => a - b,
    '×': (a: number, b: number): number => a * b,
    '÷': (a: number, b: number): number => a / b,
  };

  const stack: number[] = [];
  const parsed: Expression[] = parseInfixExpression(expression);

  parsed.forEach((lit) => {
    if (typeof lit === 'number') {
      stack.push(lit);
    } else if (isOperation(lit)) {
      // Алгоритм парсинга выражения гарантирует, что стэк не пуст
      const b = stack.pop() as number;
      const a = stack.pop() as number;

      stack.push(operations[lit](a, b));
    }
  });

  return stack[0];
};

const parseString = (str: string): Expression[] => {
  const result: Expression[] = [];
  let num: string[] = [];

  str.split('').forEach((sym) => {
    if (isOperation(sym) || isParanthesis(sym)) {
      if (num.length) {
        result.push(Number(num.join('')));
        num = [];
      }
      result.push(sym);
    } else {
      num.push(sym);
    }
  });

  if (num.length) {
    result.push(Number(num.join('')));
    num = [];
  }

  return result;
};

const calculate = (exp: string): number => {
  const expression = parseString(exp);

  return calcExpression(expression);
};

export default calculate;
