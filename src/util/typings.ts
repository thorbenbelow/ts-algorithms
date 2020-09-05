export type EvalFn<T> = (value: T ) => boolean;
export type CompareFn<T> = (a: T, b: T) => number;