export function sieveOfEratosthenes(end: number): Array<number> {
  if(end <= 0) throw new Error('Bad Parameter. End <= 0.');
  const primes = new Array(end + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(end); ++i) {
    let test = i*i;
    if(primes[i]){
      while (test <= end) {
        primes[test] = false;
        test += i;
      }
    }
  }
  return primes.map((e, i) => e ? i : e).filter(Boolean);
}