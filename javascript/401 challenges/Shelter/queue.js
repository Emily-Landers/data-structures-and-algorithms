'use strict';

const LinkedList = require('./list.js');

class Queue {
  constructor() {
    this.listOne = new LinkedList(),
    this.listTwo = new LinkedList(),
    this.lengthOne = 0,
    this.lengthTwo = 0;
  }

  enqueue(value) {
    this.listOne.append(value);
    this.lengthOne++;
    return this;
  }

  dequeue() {
    if (this.lengthOne === 0) {
      return ('The Queue is empty dawg!');
    }
    const removedNode = this.listOne.getTheHeadNode();
    if (removedNode.data) {
      this.listOne.removeTheFirstNode();
      this.lengthTwo++;
      return this;
    }
  }

  peek() {
    return this.listOne.getTheHeadNode();
  }
}

module.exports = Queue;
