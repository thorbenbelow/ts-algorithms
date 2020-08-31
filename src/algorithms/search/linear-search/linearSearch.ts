import {CompareFn} from "../../../util/typings";

export function linearSearch<T>(A: Array<T>, compareFn: CompareFn<T>){
  for(const a of A){
    if(compareFn(a)) return a;
  }
  return null;
}