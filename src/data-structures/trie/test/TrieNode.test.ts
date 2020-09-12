import {TrieNode} from "../TrieNode";

function assertNode<T>(node: TrieNode<T> | undefined, children: Array<T> = [], isCompleteWord = false): void {
  if(!node) throw new Error('node is undefined');
  expect(node.isCompleteWord).toBe(isCompleteWord);
  for(const child of children){
    expect(node.has(child)).toBe(true);
  }
}
describe('TrieNode Test', function () {
  const node = new TrieNode<string>();
  describe('#add', function () {
    it('should add a new node', function () {
      node.add('a');
      assertNode(node, ['a']);
    });
  });
  describe('#get', function () {
    it('should return the node', function () {
      assertNode(node.get('a'));
    });
    it('should not find a node', () => {
      expect(node.get('b')).toBeUndefined();
    });
  });
  describe('#has', function () {
    it('should find a node', function () {
      expect(node.has('a')).toBe(true);
    });
    it('should not find a node', () => {
      expect(node.has('b')).toBe(false);
    });
  });
  describe('#suggest', function () {
    it('should return all keys', function () {
      expect(node.suggest()).toEqual(['a']);
    });
  });
  describe('#delete', function () {
    it('should delete a node', function () {
      expect(node.delete('a')).toBe(true);
    });
    it('should not delete a node', () => {
      expect(node.delete('a')).toBe(false);
    });
  });
});