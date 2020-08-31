import {Stack} from "../Stack";

describe('Stack', () => {
  const s = new Stack<number>();
  it('should create an empty stack', () => {
    expect(s.peek()).toBeUndefined();
  });
  it('should add the first value', () => {
    s.add(1);
    expect(s.peek()).toBe(1);
  });
  it('should add the second value', () => {
    s.add(2);
    expect(s.peek()).toBe(2);
  });
  it('should return the values in lifo order', () => {
    expect(s.pop()).toBe(2);
    expect(s.pop()).toBe(1);
    expect(s.pop()).toBeUndefined();
  });
});