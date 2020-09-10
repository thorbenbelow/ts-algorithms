import {bwPowerSet, recPowerSet} from "../powerSet";

describe('power set', function () {
  describe('bitwise solution', function () {
    it('should calculate the power sets', function () {
      expect(bwPowerSet([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
      expect(bwPowerSet(['a', 'b', 'c'])).toEqual([[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']]);
    });
  });
  describe('recursive solution', function () {
    it('should calculate the power sets', function () {
      expect(recPowerSet([1, 2, 3]).sort()).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].sort());
      expect(recPowerSet(['a', 'b', 'c']).sort()).toEqual([[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']].sort());
    });
  });
});