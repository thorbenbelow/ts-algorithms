export function bwPowerSet<T>(A: Array<T>): Array<Array<T>> {
  const size = 2 ** A.length;
  const sets: Array<Array<T>> = [];
  for (let i = 0; i < size; ++i) {
    sets.push([]);
    for (let j = 0; j < A.length; ++j) {
      if ((i & (1 << j)) > 0) {
        sets[i].push(A[j])
      }
    }
  }
  return sets;
}

export function recPowerSet<T>(A: Array<T>): Array<Array<T>> {
  const sets: Array<Array<T>> = [];
  _recPowerSet(A, 0, [], sets);
  return sets;
}

function _recPowerSet<T>(A: Array<T>, i: number, B: Array<T>, sets: Array<Array<T>>): void {
  if (i === A.length) {
    sets.push(B);
  } else {
    _recPowerSet(A, i + 1, [...B], sets);
    B.push(A[i]);
    _recPowerSet(A, i + 1, [...B], sets);
  }
}