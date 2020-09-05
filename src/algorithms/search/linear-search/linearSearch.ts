import {EvalFn} from "../../../util/typings";

export function linearSearch<T>(A: Array<T>, evalFn: EvalFn<T>){
  for(const a of A){
    if(evalFn(a)) return a;
  }
  return null;
}