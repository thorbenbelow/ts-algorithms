import {isPrimeFermat, isPrimeSimple} from "../isPrime";

function assertPrimeFn(primeFn: (n: number) => boolean): void {
  it('primes', () => {
    expect(primeFn(2)).toBe(true);
    expect(primeFn(3)).toBe(true);
    expect(primeFn(5)).toBe(true);
    expect(primeFn(7919)).toBe(true);
  });
  it('composites', () => {
    expect(primeFn(-1)).toBe(false);
    expect(primeFn(0)).toBe(false);
    expect(primeFn(1)).toBe(false);
    expect(primeFn(4)).toBe(false);
    expect(primeFn(25)).toBe(false);
    expect(primeFn(7917)).toBe(false);
    expect(primeFn(7911)).toBe(false);
  });
}

describe('Primality test', () => {
  describe('#isPrimeSimple', () => {
    assertPrimeFn(isPrimeSimple);
  });
  describe('#isPrimeFermat', () => {
    assertPrimeFn(isPrimeFermat);
  });

});