export function insertionSort<T>(A: Array<T>): Array<T>{
  for(let i=1; i<A.length; ++i){
    const x = A[i];
    let j;
    for(j=i-1; j>=0 && A[j] > x; --j){
      A[j+1] = A[j];
    }
    A[j+1] = x;
  }
  return A;
}