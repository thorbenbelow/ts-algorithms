import {fibonacciNth, fibonacciNthClosedForm, fibonacciSeq} from '../fibonacci';

describe('fibonacci', () => {
  describe('fibonacciSeq', () => {
    it('should throw an error on n < 1', () => {
      expect(() => fibonacciSeq(0)).toThrow();
      expect(() => fibonacciSeq(-1)).toThrow();
    });
    it('should calculate fibonacci correctly', () => {
      expect(fibonacciSeq(1)).toEqual([1]);
      expect(fibonacciSeq(2)).toEqual([1, 1]);
      expect(fibonacciSeq(3)).toEqual([1, 1, 2]);
      expect(fibonacciSeq(4)).toEqual([1, 1, 2, 3]);
      expect(fibonacciSeq(5)).toEqual([1, 1, 2, 3, 5]);
      expect(fibonacciSeq(6)).toEqual([1, 1, 2, 3, 5, 8]);
      expect(fibonacciSeq(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
      expect(fibonacciSeq(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
      expect(fibonacciSeq(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
      expect(fibonacciSeq(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
  });
  describe('fibonacciNth', () => {
    it('should throw an error on n === 1', () => {
      expect(() => fibonacciNth(0)).toThrow();
      expect(() => fibonacciNth(-1)).toThrow();

    });
    it('should calculate fibonacci correctly', () => {
      expect(fibonacciNth(1)).toBe(1);
      expect(fibonacciNth(2)).toBe(1);
      expect(fibonacciNth(3)).toBe(2);
      expect(fibonacciNth(4)).toBe(3);
      expect(fibonacciNth(5)).toBe(5);
      expect(fibonacciNth(6)).toBe(8);
      expect(fibonacciNth(7)).toBe(13);
      expect(fibonacciNth(8)).toBe(21);
      expect(fibonacciNth(20)).toBe(6765);
      expect(fibonacciNth(30)).toBe(832040);
      expect(fibonacciNth(50)).toBe(12586269025);
      expect(fibonacciNth(70)).toBe(190392490709135);
      expect(fibonacciNth(71)).toBe(308061521170129);
      expect(fibonacciNth(72)).toBe(498454011879264);
      expect(fibonacciNth(73)).toBe(806515533049393);
      expect(fibonacciNth(74)).toBe(1304969544928657);
      expect(fibonacciNth(75)).toBe(2111485077978050);
      expect(fibonacciNth(80)).toBe(23416728348467685);
      expect(fibonacciNth(90)).toBe(2880067194370816120);
    });
  });
  describe('fibonacciClosedForm', () => {
    it('should throw an error on n < 1', () => {
      expect(() => fibonacciNthClosedForm(0)).toThrow();
      expect(() => fibonacciNthClosedForm(-1)).toThrow();
    });
    it('should throw an error on n > 71', () => {
      expect(() => fibonacciNthClosedForm(71)).toThrow();
    });

    it('should calculate fibonacci correctly', () => {
      expect(fibonacciNthClosedForm(1)).toBe(1);
      expect(fibonacciNthClosedForm(2)).toBe(1);
      expect(fibonacciNthClosedForm(3)).toBe(2);
      expect(fibonacciNthClosedForm(4)).toBe(3);
      expect(fibonacciNthClosedForm(5)).toBe(5);
      expect(fibonacciNthClosedForm(6)).toBe(8);
      expect(fibonacciNthClosedForm(7)).toBe(13);
      expect(fibonacciNthClosedForm(8)).toBe(21);
      expect(fibonacciNthClosedForm(20)).toBe(6765);
      expect(fibonacciNthClosedForm(30)).toBe(832040);
      expect(fibonacciNthClosedForm(50)).toBe(12586269025);
      expect(fibonacciNthClosedForm(70)).toBe(190392490709135);
    });
  });
});