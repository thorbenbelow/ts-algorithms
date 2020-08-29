import {factorial, factorialRecursive} from "../factorial";

function assertFactorial(factorial: (n: number) => number): void {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(5)).toBe(120);
  expect(factorial(8)).toBe(40320);
  expect(factorial(10)).toBe(3628800);
}

describe('factorial', () => {
  it('should calculate factorial', () => {
    assertFactorial(factorial);
  });
});
describe('factorialRecursive', () => {
  it('should calculate factorial', () => {
    assertFactorial(factorialRecursive);
  });
});