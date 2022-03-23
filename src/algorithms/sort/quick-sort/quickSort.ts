export function quickSort(A: number[]): number[] {
  if(A.length <= 1){ 
    return A;
  }
  
  const pivot = A[0];
  const left=[], right= [], mid = [];
  
  for(const x of A){
    if(x < pivot) {
      left.push(x);
    }else if(x> pivot) {
      right.push(x);
    }else {
      mid.push(x);
    }
  }
  
  return [...quickSort(left), ...mid, ...quickSort(right)]
}


export function quickSortInPlace<T = unknown>(A: Array<T>): void {
  console.log(A);
  // TODO
}