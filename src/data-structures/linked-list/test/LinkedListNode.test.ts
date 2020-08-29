import {LinkedListNode} from '../LinkedListNode';

export function assertNode<T>(node: LinkedListNode<T> | null, value: T): void {
  expect(node).toBeDefined();
  if (node) expect(node.value).toBe(value);
}

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create list node with object as a value', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
  });

  it('should link nodes together', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next?.value).toBe(2);
  });

});