export class Queue<T> {
  private queue = new Array<T>();
  peek(): T | undefined{
    return this.queue ? this.queue[0] : undefined;
  }
  add(value: T): void {
    this.queue.push(value);
  }
  pop(): T | undefined {
    return this.queue.shift();
  }
}