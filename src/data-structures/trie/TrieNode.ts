// add has delete suggest get
export class TrieNode<T> {
  constructor(
    public isCompleteWord = false,
    private children: Map<T, TrieNode<T>> = new Map<T, TrieNode<T>>()
  ) {}

  add(value: T, isCompleteWord = false): void {
    if(!this.children.has(value)){
      this.children.set(value, new TrieNode<T>(isCompleteWord));
    }
  }
  get(value: T): TrieNode<T> | undefined{
    return this.children.get(value);
  }
  has(value: T): boolean {
    return this.children.has(value);
  }
  delete(value: T): boolean {
    return this.children.delete(value);
  }
  suggest(): Array<T> {
    return Array.from(this.children.keys());
  }
}