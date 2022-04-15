import { LinkedList } from "../linked-list/LinkedList";

// todo different hash functions
// resizing strategies

export class HashTable<K, V> {
  private _values: Array<LinkedList<[K, V]>> = Array.from(Array(10));

  hash(key: K): number {
    return 0;
  }

  set(key: K, value: V): void {
    const index = this.index(key);
    if (this._values[index]) {
      this._values[index].append([key, value]);
    } else {
      this._values[index] = new LinkedList();
      this._values[index].append([key, value])
    }
  }

  keys(): K[] {
    return this.entries().map(e => e[0]);
  }

  values(): V[] {
    return this.entries().map(e => e[1]);
  }

  entries(): [K, V][] {
    return this._values.filter(row => !!row).map(row => Array.from(row.entries())).flat()
  }

  index(key: K): number {
    return this.hash(key) % this._values.length;
  }

  get(key: K): V | null {
    const index = this.index(key);
    const val = this._values[index]?.find((pair) => pair[0] === key)
    return val?.value[1] || null;

  }

  contains(key: K): boolean {
    return !!this.get(key);
  }
}
