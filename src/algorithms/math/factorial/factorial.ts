export function factorial(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; ++i) {
    r *= i
  }
  return r;
}

export function factorialRecursive(n: number): number {
  return (n <= 1) ? 1 : n * factorial(n - 1);
}