import {Queue} from "../Queue";

describe('Queue', () => {
  const q = new Queue<number>();
  it('should create an empty queue', () => {
    expect(q.peek()).toBeUndefined();
  });
  it('should add the first value', () => {
    q.add(1);
    expect(q.peek()).toBe(1);
  });
  it('should add the second value', () => {
    q.add(2);
    expect(q.peek()).toBe(1);
  });
  it('should return the values in fifo order', () => {
    expect(q.pop()).toBe(1);
    expect(q.pop()).toBe(2);
    expect(q.pop()).toBeUndefined();
  });
});