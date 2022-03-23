import { quickSort, quickSortInPlace } from "../quickSort";

describe('quicksort', () => {
  it('should return a sorted array', () => {
    expect(quickSort([3,2,5,2,1])).toEqual([1,2,2,3,5]);
  })

  xit('should sort the array in place', () => {
    const A = [3,2,5,2,1];
    quickSortInPlace(A);
    expect(A).toEqual([1,2,2,3,5]);
  })
});