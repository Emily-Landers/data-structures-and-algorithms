'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  insert(value) {
    let node = new Node(value);
    this.head = node;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  to_sting() {
    let currentNode = this.head;
    let valuesStr = '';
    while (currentNode !== null) {
      valuesStr += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    valuesStr += 'NULL';
    return valuesStr;
  }

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);
    let currentNode = this.head;
    let previousNode;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        newNode.next = currentNode;
        previousNode.next = newNode;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newVal) {
    let newNode = new Node(newVal);
    let currentNode = this.head;
    let nextVal;
    while (currentNode !== null) {
      if (currentNode.value === value ){
        nextVal = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextVal;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  kthFromEnd(k){

    let arr = [];
    let currentNode = this.head;
    arr.push(currentNode.value);
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }
    let idx = arr.length -k;
    if (idx >= 1) {
      return arr[idx-1];
    } else {
      return ` ${k} is not an index in array`;
    }
  }
}

let list = new LinkedList();

list.append('joey');
list.append(23);
list.append(93);
list.insertAfter('joey', 'hernandez');

console.log(JSON.stringify(list));
console.log(list.kthFromEnd(2));
console.log(list.kthFromEnd(9));

module.exports = Node;
module.exports = LinkedList;