export function fibonacciSeq(n: number): Array<number> {
  if (n < 1) throw Error('Choose a number equal to or greater than 1.');
  const fib: Array<number> = [1];
  let current = 1;
  let previous = 0;
  for (; n > 1; --n) {
    [current, previous] = [current + previous, current];
    fib.push(current);
  }
  return fib;
}

export function fibonacciNth(n: number): number {
  if (n < 1) throw Error('Choose a number equal to or greater than 1.');
  let current = 1;
  let previous = 0;
  for (; n > 1; --n) {
    [current, previous] = [current + previous, current];
  }
  return current;
}

export function fibonacciNthClosedForm(n: number): number {
  if (n < 1 || n > 70) throw Error('Choose a number equal to or greater than 1.');
  const sq = Math.sqrt(5);
  return Math.floor(1 / sq * (((1 + sq) / 2) ** n - ((1 - sq) / 2) ** n));
}