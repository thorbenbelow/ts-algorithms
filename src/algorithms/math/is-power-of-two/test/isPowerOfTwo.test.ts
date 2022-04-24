import { isPowerOfTwoNaive, isPowerOfTwoBitwise } from '../isPowerOfTwo';

describe("isPowerOfTwo", () => {
  describe("Naive", () => {

    it("should return true", () => {
      expect(isPowerOfTwoNaive(8)).toBeTruthy();
    });

    it("should return false", () => {
      expect(isPowerOfTwoNaive(7)).toBeFalsy();
    })

  })

  describe("Bitwise", () => {

    it("should return true", () => {
      expect(isPowerOfTwoBitwise(8)).toBeTruthy();
    });

    it("should return false", () => {
      expect(isPowerOfTwoBitwise(7)).toBeFalsy();
    })

    it("should handle negative numbers", () => {
      expect(isPowerOfTwoBitwise(-2)).toBeTruthy();
    })

  })



});
