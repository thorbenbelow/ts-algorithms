import {linearSearch} from "../linearSearch";

describe('#linearSearch', () => {
  const A: Array<number> = [];
  it('should be able to handle empty arrays', () => {
    expect(linearSearch(A, () => true)).toBeNull();
  })
  it('should find the value', () => {
    A.push(1);
    expect(linearSearch(A,a=>a===1));
  })
  it('should not find the value', () => {
    expect(linearSearch(A,a=>a===2));
  })
});