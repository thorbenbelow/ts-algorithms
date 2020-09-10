import {sieveOfEratosthenes} from "../sieveOfEratosthenes";

describe('Sieve of Eratosthenes', function () {
  it('should handle bad limits', () => {
    expect(() => sieveOfEratosthenes(-1)).toThrowError();
  });
  it('should return the primes up to the limit', () => {
    expect(sieveOfEratosthenes(5)).toEqual([2, 3, 5]);
    expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
    expect(sieveOfEratosthenes(100)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ]);
  });
});