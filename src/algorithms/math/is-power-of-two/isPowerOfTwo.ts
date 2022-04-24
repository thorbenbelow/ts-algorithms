export function isPowerOfTwoNaive(n: number): boolean {
  return n % 2 === 0;
}

export function isPowerOfTwoBitwise(n: number): boolean {
  return (n != 0) && ((Math.abs(n) & (Math.abs(n) - 1)) == 0);
}
