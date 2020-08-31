import {DoublyLinkedList} from "../DoublyLinkedList";
import {DoublyLinkedListNode} from "../DoublyLinkedListNode";

function assertNode<T>(node: DoublyLinkedListNode<T> | null, value: T, nextValue: T | null = null, prevValue: T | null = null): void {
  expect(node).toBeDefined();
  expect(node?.value).toBe(value);
  if(node?.next) expect(node.next.value).toBe(nextValue); else expect(node?.next).toBeNull();
  if(node?.previous) expect(node?.previous?.value).toBe(prevValue); else expect(node?.previous).toBeNull();
}

describe('DoublyLinkedList', () => {
  it('should create an empty List', () => {
    const dll = new DoublyLinkedList();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
  });
  describe('#prepend', () => {
    const dll = new DoublyLinkedList();
    it('should add the value', () => {
      dll.prepend(1);
      assertNode(dll.head, 1);
      assertNode(dll.tail, 1);
    });
    it('should prepend the next value', () => {
      dll.prepend(2);
      assertNode(dll.head, 2, 1);
      assertNode(dll.tail, 1, null, 2);
    });
  });
  describe('#append', () => {
    const dll = new DoublyLinkedList();
    it('should add the value', () => {
      dll.append(1);
      assertNode(dll.head, 1);
      assertNode(dll.tail, 1);
    });
    it('should append the next value', () => {
      dll.append(2);
      assertNode(dll.head, 1, 2);
      assertNode(dll.tail, 2, null, 1);
    });
  });
  describe('#contains', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    it('should find a node', () => {
      expect(dll.contains(a => a === 1)).toBe(true);
    })
    it('should not find a node', () => {
      expect(dll.contains(a => a === 2)).toBe(false);
    })
  });
  describe('#find', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    it('should find a node', () => {
      assertNode(dll.find(a => a === 1), 1);
    })
    it('should not find a node', () => {
      expect(dll.find(a => a === 2)).toBeNull();
    })
  });
  describe('#delete', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    dll.append(2);
    it('should not delete any node', () => {
      expect(dll.delete(a => a === 3)).toBeNull();
      assertNode(dll.head, 1, 2);
      assertNode(dll.tail, 2, null, 1);
    })
    it('should delete the inner node', () => {
      dll.append(3);
      assertNode(dll.delete(a => a === 3), 3, null, 2);
      assertNode(dll.head, 1, 2);
      assertNode(dll.tail, 2, null, 1);
    })
    it('should delete the head', () => {
      assertNode(dll.delete(a => a === 1), 1, 2);
      assertNode(dll.head, 2);
      assertNode(dll.tail,2);
    });
    it('should delete the tail', () => {
      dll.prepend(1);
      assertNode(dll.delete(a => a === 2), 2,null,1);
      assertNode(dll.head, 1);
      assertNode(dll.tail,1);
    });
    it('should delete the remaining node', () => {
      assertNode(dll.delete(a => a === 1), 1);
      expect(dll.head).toBeNull();
      expect(dll.tail).toBeNull();
    });
  });
})