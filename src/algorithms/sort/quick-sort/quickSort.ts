export function quickSort(A: number[]): number[] {
  if (A.length <= 1) {
    return A;
  }

  const pivot = A[0];
  const left = [], right = [], mid = [];

  for (const x of A) {
    if (x < pivot) {
      left.push(x);
    } else if (x > pivot) {
      right.push(x);
    } else {
      mid.push(x);
    }
  }

  return [...quickSort(left), ...mid, ...quickSort(right)]
}


export function quickSortInPlace<T = unknown>(A: Array<T>, lo = 0, hi = A.length - 1): void {
  if (lo >= hi || lo < 0) {
    return;
  }

  const p = partition(A, lo, hi);

  quickSortInPlace(A, lo, p - 1);
  quickSortInPlace(A, p + 1, hi);

}

function partition<T = unknown>(A: Array<T>, lo: number, hi: number): number {
  const pivot = A[hi];

  let i = lo - 1;

  for (let j = lo; j < hi; j++) {
    if (A[j] <= pivot) {
      i++;
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  i++;
  [A[i], A[hi]] = [A[hi], A[i]];
  return i;
}
