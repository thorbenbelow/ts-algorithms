import {DoublyLinkedListNode} from "./DoublyLinkedListNode";
import {EvalFn} from "../../util/typings";

export class DoublyLinkedList<T> {
  constructor(
    public head: DoublyLinkedListNode<T> | null = null,
    public tail: DoublyLinkedListNode<T> | null = null
  ) {}
//  prepend append find contains delete insertBefore insertAfter
  prepend(value: T): void {
    const node = new DoublyLinkedListNode(value);
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
  }
  append(value: T): void {
    const node = new DoublyLinkedListNode(value);
    if(!this.tail){
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
  contains(evalFn: EvalFn<T>): boolean{
    return Boolean(this.find(evalFn));
  }
  find(evalFn: EvalFn<T>): DoublyLinkedListNode<T> | null {
    let node = this.head;
    while(node){
      if(evalFn(node.value)) return node;
      node = node.next;
    }
    return null;
  }
  delete(evalFn: EvalFn<T>): DoublyLinkedListNode<T> | null {
    if(!this.head) return null;
    if(evalFn(this.head.value)){
      const node = this.head;
      if(!this.head.next){
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.previous = null;
      }
      return node;
    }
    if(this.tail && evalFn(this.tail.value)){
      const node = this.tail;
      this.tail = this.tail.previous;
      if(this.tail) this.tail.next = null;
      return node;
    }
    const node = this.find(evalFn);
    if(!node)return null;
    if(node.previous) node.previous.next = node.next;
    if(node.next) node.next.previous = node.previous;
    return node;
  }
}