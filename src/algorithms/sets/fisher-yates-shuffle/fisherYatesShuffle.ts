export function fisherYatesShuffle<T>(A: Array<T>): void {
  for(let i=A.length - 1; i >= 0; --i){
    const j = Math.floor(Math.random()*A.length);
    [A[i], A[j]] = [A[j], A[i]];
  }
}