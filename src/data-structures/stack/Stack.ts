export class Stack<T> {
  private stack = new Array<T>();
  peek(): T | undefined{
    return this.stack ? this.stack[this.stack.length-1] : undefined;
  }
  add(value: T): void {
    this.stack.push(value);
  }
  pop(): T | undefined {
    return this.stack.pop();
  }
}