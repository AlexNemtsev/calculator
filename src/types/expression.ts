const paranthesis = ['(', ')'] as const;
const operations = ['+', '-', '÷', '×'] as const;

export type Paranthesis = (typeof paranthesis)[number];
export type Operation = (typeof operations)[number];
export type Expression = number | Paranthesis | Operation;

export const isOperation = (value: string): value is Operation => {
  const values: string[] = [];
  operations.forEach((val) => values.push(val));
  return values.includes(value);
};

export const isParanthesis = (value: string): value is Paranthesis => {
  const values: string[] = [];
  paranthesis.forEach((val) => values.push(val));
  return values.includes(value);
};
