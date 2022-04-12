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

  //todo collision, resizing

});