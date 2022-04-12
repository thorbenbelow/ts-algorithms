import { LinkedList } from "../linked-list/LinkedList";
import { LinkedListNode } from "../linked-list/LinkedListNode";

// todo different hash functions
// resizing strategies

export class HashTable<K, V> {
  values = new Array<LinkedList<[K,V]>>();
  
  hash(key: K): number {
    return 0;
  }
  
  set(key: K, value: V): void {
    const index = this.hash(key);

    if(this.values[index]) {
      this.values[index].append([key, value]);
    }else {
      this.values[index] = new LinkedList(new LinkedListNode([key, value]));
    }
  }

  get(key: K): V | null {
    const index = this.hash(key);
    return this.values[index]?.find(([k]) => k === key)?.value[1] || null;
  }

  contains(key: K): boolean {
    return !!this.get(key);
  }
}
