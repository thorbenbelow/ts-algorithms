export function bubbleSort<T>(arr: T[]): void {
 
  let swapped = false;
  while(!swapped) {
    for(let i=0; i<arr.length-1; i++) {
      if(arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
      }
    }
    swapped= !swapped;
  }
}