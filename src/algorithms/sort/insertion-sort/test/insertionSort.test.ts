import {insertionSort} from "../insertionSort";

function testData(): { inputs: Array<Array<number>>; expectations: Array<Array<number>> } {
  return {
    inputs: [
      [2, 4, 6, 7, 82, 4, 2, 345, 5, 3],
      [1, 4, 4, 2, 54, 7, 2, 3, 54, 67, 8, 8, 76]
    ],
    expectations: [
      [2, 2, 3, 4, 4, 5, 6, 7, 82, 345],
      [1, 2, 2, 3, 4, 4, 7, 8, 8, 54, 54, 67, 76]
    ]
  }
}

describe('insertion sort', function () {
  it('should sort the array', function () {
    const {inputs, expectations} = testData();
    inputs.forEach((input: Array<number>, i: number) => expect(insertionSort(input)).toEqual(expectations[i]));
  });
});