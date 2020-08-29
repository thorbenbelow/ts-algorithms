import {LinkedList} from '../LinkedList';
import {LinkedListNode} from "../LinkedListNode";

function assertNode<T>(node: LinkedListNode<T> | null, value: T) {
  expect(node).toBeDefined();
  if (node) expect(node.value).toBe(value);
}

describe('LinkedList', () => {
  it('should create an empty list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });
  describe('#prepend', () => {
    const linkedList = new LinkedList();
    it('should add first value', () => {
      linkedList.prepend(1);
      assertNode(linkedList.head, 1);
      assertNode(linkedList.tail, 1);
    });
    it('should prepend second value', () => {
      linkedList.prepend(2);
      assertNode(linkedList.head, 2);
      assertNode(linkedList.tail, 1);
    });
  })
  describe('#append', () => {
    const linkedList = new LinkedList();
    it('should add first value', () => {
      linkedList.append(1);
      assertNode(linkedList.head, 1);
      assertNode(linkedList.tail, 1);
    });
    it('should append second value', () => {
      linkedList.append(2);
      assertNode(linkedList.head, 1);
      assertNode(linkedList.tail, 2);
    });
  });
  describe('#find', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    it('should find a node', () => {
      const node = linkedList.find(a => a === 1)
      expect(node).toBeDefined();
      if (node) expect(node.value).toBe(1);
    });
    it('should not find a node', () => {
      linkedList.append(1);
      const node = linkedList.find(a => a === 2)
      expect(node).toBeNull();
    });
  })
  describe('#contains', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    it('should find a node', () => {
      expect(linkedList.contains(a => a === 1)).toBe(true);
    });
    it('should not find a node', () => {
      expect(linkedList.contains(a => a === 2)).toBe(false);
    });
  })
  describe('#remove', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    it('should not remove any node', () => {
      expect(linkedList.remove(a => a === 3)).toBeNull();
      assertNode(linkedList.head, 1);
      assertNode(linkedList.tail, 2);
    })
    it('should remove the tail', () => {
      assertNode(linkedList.remove(a => a === 2), 2);
      assertNode(linkedList.head, 1);
      assertNode(linkedList.tail, 1);
    })
    it('should remove the head', () => {
      linkedList.append(2);
      assertNode(linkedList.remove(a => a === 1), 1);
      assertNode(linkedList.head, 2);
      assertNode(linkedList.tail, 2);
    })
    it('should remove the remaining node', () => {
      assertNode(linkedList.remove(a => a === 2), 2);
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
    })
    it('should only remove one node', () => {
      linkedList.append(1);
      linkedList.append(1);
      assertNode(linkedList.remove(a => a === 1), 1);
      assertNode(linkedList.head, 1);
      if (linkedList.head) expect(linkedList.head.next).toBeNull();
      assertNode(linkedList.tail, 1);
      if (linkedList.tail) expect(linkedList.tail.next).toBeNull();
    });
  })
})