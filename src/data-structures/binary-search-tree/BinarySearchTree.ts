import {BinarySearchTreeNode} from "./BinarySearchTreeNode";
import {CompareFn} from "../../util/typings";

export class BinarySearchTree<T> {
  constructor(
    public compareFn: CompareFn<T>,
    public root: BinarySearchTreeNode<T> | null = null
  ) {
  }

  add(value: T): void {
    this.root = this.insert(this.root, value);
  }
  private insert(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null{
    if(node === null) return new BinarySearchTreeNode<T>(value);
    if(this.compareFn(node.value, value) === 0) return node;
    if(this.compareFn(node.value, value) > 0){
      node.left = this.insert(node.left, value);
      return node;
    }else {
      node.right = this.insert(node.right, value);
      return node;
    }
  }

  contains(value: T): boolean {
    return Boolean(this.find(value));
  }

  min(node: BinarySearchTreeNode<T> | null = this.root): T {
    if (node === null) throw new Error('Tree is empty');
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  delete(value: T): void {
    this.root = this._delete(this.root, value);
  }

  private _delete(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null {
    if (node === null) {
      return node;
    }
    if (this.compareFn(node.value, value) > 0) {
      node.left = this._delete(node.left, value)
    } else if (this.compareFn(node.value, value) < 0) {
      node.right = this._delete(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        node.value = this.min(node.right);
        node.right = this._delete(node.right, node.value);
      }
    }
    return node;
  }

  find(value: T): BinarySearchTreeNode<T> | null {
    return this._find(this.root, value);
  }

  private _find(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null {
    if (node === null || this.compareFn(node.value, value) === 0)
      return node;
    node = (this.compareFn(node.value, value) > 0) ? node.left : node.right;
    return this._find(node, value);
  }
}