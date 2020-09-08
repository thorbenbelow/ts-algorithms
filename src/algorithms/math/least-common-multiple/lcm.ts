import {gcd} from "../euclidean-algotithm/gcd";

export function lcm(a: number, b: number): number {
  const g = gcd(a, b);
  if (g === 0) throw new Error('Cant calculate LCM. GCD is 0.');
  return Math.abs(Math.abs(a * b) / g);
}