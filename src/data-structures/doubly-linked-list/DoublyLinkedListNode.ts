export class DoublyLinkedListNode<T> {
  constructor(
    public value: T,
    public next: DoublyLinkedListNode<T> | null = null,
    public previous: DoublyLinkedListNode<T> | null = null
  ) {}
}