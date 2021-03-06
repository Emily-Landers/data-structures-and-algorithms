'use strict';

const Node = require('./Node');

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

    //define head
    let node = new Node(value);

    //make head to node
    this.head = node;
  }

  includes(value) {
    //setting head to current node
    let currentNode = this.head;

    while (currentNode) {
      //validate if the nodes value is equal to the passed value
      if (currentNode.value === value) {
        return true;
      }
      //moves to next node to validate with passed value
      currentNode = currentNode.next;
    }
    //returns false if passed value is not found
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

    // feel like I am cheating using an array
    let arr = [];
    let currentNode = this.head;
    arr.push(currentNode.value);

    // while the node looking at has some value, push those values into array and move on to next until null
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }

    // let index count equal arr length minus k to find searched idx
    let idx = arr.length -k;
    if (idx >= 1) {
      return arr[idx-1];
    } else {
      return ` ${k} is not an index in array`;
    }
  }
}

module.exports = LinkedList;