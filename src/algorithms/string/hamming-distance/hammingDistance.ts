export function hammingDistance(s1: string, s2: string): number {
  if(s1.length !== s2.length) throw new Error('String length must match');
  let diff = 0;
  for(let i=0; i<s1.length; ++i){
    if(s1[i] !== s2[i]) diff++;
  }
  return diff;
}