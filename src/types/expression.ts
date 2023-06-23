type Paranthesis = '(' | ')';

const operations = ['+', '-', '÷', '×'] as const;

export type Operation = (typeof operations)[number];

export type Expression = number | Paranthesis | Operation;

export const isOperation = (value: string): value is Operation => {
  const values: string[] = [];
  operations.forEach((val) => values.push(val));
  return values.includes(value);
};
