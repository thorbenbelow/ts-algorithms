import {BinarySearchTree} from "../BinarySearchTree";
import {BinarySearchTreeNode} from "../BinarySearchTreeNode";

const compareFn = (a: number, b: number): number => a - b

function assertNode<T>(node: BinarySearchTreeNode<T>, value: T, left: T | null = null, right: T | null = null): void {
  expect(node).toBeDefined();
  expect(node.value).toBe(value);
  left ? expect(node.left?.value) : expect(node.left).toBeNull();
  right ? expect(node.right?.value).toBe(right) : expect(node.right).toBeNull();
}

describe('BinarySearchTree', () => {
  it('should create an empty tree', () => {
    const bst = new BinarySearchTree<number>(compareFn);
    expect(bst.root).toBeNull();
  });
  describe('#add', () => {
    const bst = new BinarySearchTree<number>(compareFn);
    it('should add a root node', () => {
      bst.add(5);
      assertNode(<BinarySearchTreeNode<number>>bst.root, 5);
    });
    it('should do nothing', () => {
      bst.add(5);
      assertNode(<BinarySearchTreeNode<number>>bst.root, 5);
    });
    it('should add a node left', () => {
      bst.add(4);
      assertNode(<BinarySearchTreeNode<number>>bst.root, 5, 4);
      if (bst.root?.left) assertNode(bst.root.left, 4);
    });
    it('should add a node left', () => {
      bst.add(6);
      assertNode(<BinarySearchTreeNode<number>>bst.root, 5, 4, 6);
      if (bst.root?.left) assertNode(bst.root.left, 4);
      if (bst.root?.right) assertNode(bst.root.right, 6);
    });
  });
  describe('#contains', () => {
    const bst = new BinarySearchTree<number>(compareFn);
    bst.add(5);
    bst.add(4);
    bst.add(6);
    it('should find all nodes', () => {
      expect(bst.contains(4)).toBe(true);
      expect(bst.contains(5)).toBe(true);
      expect(bst.contains(6)).toBe(true);
    });
    it('should not find a node', () => {
      expect(bst.contains(-1)).toBe(false);
      expect(bst.contains(0)).toBe(false);
      expect(bst.contains(1)).toBe(false);
      expect(bst.contains(7)).toBe(false);
    });
  })
  describe('#delete', () => {
    const bst = new BinarySearchTree<number>(compareFn);
    bst.add(5);
    bst.add(4);
    bst.add(6);
    it('should not delete any node', () => {
      bst.delete(7);
      assertNode(<BinarySearchTreeNode<number>>bst.root, 5, 4, 6);
    });
    it('should delete the root', () => {
      bst.delete(5);
      assertNode(<BinarySearchTreeNode<number>>bst.root, 6,4,null);
    });
    it('should delete the leaf', () => {
      bst.delete(4);
      assertNode(<BinarySearchTreeNode<number>>bst.root, 6,null,null);
    });
    it('should delete the remaining node', () => {
      bst.delete(6);
      expect(bst.root).toBeNull();
    });
  });
  describe('#min', () => {
    const bst = new BinarySearchTree<number>(compareFn);
    it('should throw an error when Tree is empty', () => {
      expect( () => bst.min()).toThrowError();
    });
    it('should return the min', () => {
      bst.add(5);
      bst.add(4);
      bst.add(6);
      bst.add(2);
      expect(bst.min()).toBe(2);
    });
    it('should handle negative numbers', () => {
      bst.add(-1);
      expect(bst.min()).toBe(-1);
    });
  });
});