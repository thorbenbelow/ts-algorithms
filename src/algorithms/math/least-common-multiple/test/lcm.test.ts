import {lcm} from "../lcm";

describe('least common multiple', function () {
  it('should calculate the least common multiple', () => {
    expect(lcm(21,6)).toBe(42);
    expect(lcm(4,6)).toBe(12);
    expect(lcm(-5,2)).toBe(10);
    expect(lcm(0,2)).toBe(0);
    expect(lcm(2,0)).toBe(0);
  });
  it('should be able to handle 0,0', () => {
    expect(() => lcm(0,0)).toThrowError();
  })
});