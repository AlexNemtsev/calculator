import { Expression, isOperation, isParanthesis } from '../types/expression';

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

export default parseString;
