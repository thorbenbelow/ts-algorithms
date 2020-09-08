import {gcd} from "../gcd";

describe('euclidean algorithm', function () {
  it('should calculate the greatest common divisor', () => {
    expect(gcd(12,6)).toBe(6);
    expect(gcd(48,180)).toBe(12)
  });
});