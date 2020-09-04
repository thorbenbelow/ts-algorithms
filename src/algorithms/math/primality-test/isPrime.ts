export function isPrimeSimple(n: number): boolean {
  if (n <= 3) {
    return n > 1;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let k = 5; k < n; k += 2) {
    if (n % k === 0) return false;
  }
  return true;
}

export function isPrimeFermat(n: number, k = 15): boolean {
  if (n <= 1 || n === 4) return false;
  if (n <= 3) return true;
  const one = BigInt(1), nn = BigInt(n), n1n = BigInt(n - 1);
  for (; k > 0; --k) {
    const a = BigInt(2 + Math.floor(Math.random() * (n - 2)));
    const res = a ** n1n % nn;
    if (res !== one) return false;
  }
  return true;
}