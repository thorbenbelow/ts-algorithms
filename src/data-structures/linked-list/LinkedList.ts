import {LinkedListNode} from './LinkedListNode';

export class LinkedList<T> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;

  prepend(value: T): void {
    const node = new LinkedListNode<T>(value, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
  }

  append(value: T): void {
    const node = new LinkedListNode<T>(value);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  find(compareFn: (a: T) => boolean): LinkedListNode<T> | null {
    let node = this.head;
    while (node) {
      if (compareFn(node.value)) return node;
      node = node.next;
    }
    return null;
  }

  contains(compareFn: (a: T) => boolean): boolean {
    return Boolean(this.find(compareFn));
  }

  remove(compareFn: (a: T) => boolean): LinkedListNode<T> | null {
    let node = this.head;
    if (node && compareFn(node.value)) {
      if (node.next) {
        this.head = node.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      return node;
    }
    while (node && node.next) {
      if (compareFn(node.next.value)) {
        const removed = node.next;
        node.next = node.next.next;
        if(!node.next){
          this.tail = null;
        }
        return removed;
      }
      node = node.next;
    }
    return null;
  }
}