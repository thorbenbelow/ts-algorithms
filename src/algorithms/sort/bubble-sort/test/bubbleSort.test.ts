import { bubbleSort } from "../bubbleSort";

describe('bubblesort', () => {
  it('should sort the array in place', () => {
    const arr = [3, 2, 5, 2, 1];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 2, 3, 5]);
  })
});
