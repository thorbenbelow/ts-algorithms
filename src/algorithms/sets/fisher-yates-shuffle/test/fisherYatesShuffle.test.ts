import {fisherYatesShuffle} from "../fisherYatesShuffle";

describe('fisherYates', () => {
  it('should shuffle small arrays', () => {
    const A: Array<number> = [];
    fisherYatesShuffle(A)
    expect(A).toEqual([]);
    A.push(1);
    fisherYatesShuffle(A)
    expect(A).toEqual([1]);
  });

  it('should shuffle array randomly', () => {
    const A  = [1,2,3,4,5,6,7,8,9,10,11];
    fisherYatesShuffle(A);
    expect(A.length).toBe(11);
    expect(A).not.toEqual([1,2,3,4,5,6,7,8,9,10,11]);
    A.sort((a,b) => a-b)
    expect(A).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
  });
});