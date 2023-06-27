import calcExpression from './calc-expression';
import parseString from './parse-string';

const calculate = (exp: string): number => {
  const expression = parseString(exp);

  return calcExpression(expression);
};

export default calculate;
