'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListTwo {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  append(value) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      previous = current;
      current = current.next;
    }
    let newNode = new Node(value);
    if (previous !==null) {
      previous.next = newNode;
    } else {
      list.head = newNode;
    }
  }

  insertBefore(previousVal, newVal) {
    let current = this.head;
    let previous = null;
    while (current.value !== previousVal) {
      previous = current;
      current = next;
    }
    let newNode = new Node(newVal);
    newNode.next = current;
    previous.next = newNode;
  }

  insertAfter(previousVal, newVal) {
    let current = this.head;
    let previous = null;
    while (current.value !== previousVal) {
      previous = current;
      current = current.next;
    }
    let newNode = new Node(newVal);
    newNode.next = current.next;
    current.next = newNode;
  }
}

const list = new LinkedListTwo();
console.log(JSON.stringify(list));


list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);

list.insertBefore(33, 22);
list.listAfter(33, 22);


list.traverse();
