import {CompareFn} from "../../../util/typings";

export function binarySearch<T, V extends T>(A: Array<T | V>, value: T, compareFn: CompareFn<T> = defaultCompare): number {
  if (!A || !A.length) return -1;
  let left = 0;
  let right = A.length - 1;
  while (left <= right) {
    console.log('loop');
    const mid = Math.floor((left + right) / 2);
    if (compareFn(A[mid], value) === 0) return mid;
    else if (compareFn(A[mid], value) < 0) {
      console.log('left');
      left = mid + 1;
    } else {
      right = mid - 1;
      console.log('right');
    }
  }
  return -1;
}

function defaultCompare(a: any, b: any): number {
  if (a === b) return 0;
  return a > b ? 1 : -1;
}