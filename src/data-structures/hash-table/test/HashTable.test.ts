import { HashTable } from "../HashTable";

describe('HashTableTest', () => {

  const table = new HashTable();

  it('should insert the key value pair', () => {
    table.set("first-key", "first-value");
    expect(table.contains("first-key")).toBeTruthy();
  })

  it('should return the value associated with the key', () => {
    expect(table.get("first-key")).toEqual("first-value");
  })

  it('should return the value associated with the key', () => {
    expect(table.get("first-key")).toEqual("first-value");
  })

  it('should insert a colliding key value pair', () => {
    expect(table.hash("first-key")).toEqual(table.hash("second-key"));
    table.set("second-key", "second-value");
    expect(table.contains("first-key")).toBeTruthy();
    expect(table.contains("second-key")).toBeTruthy();
  })


  it('should include all entries', () => {
    expect(table.entries()).toEqual([['first-key', 'first-value'], ['second-key', 'second-value']])
  })

  //todo collision, resizing

});
