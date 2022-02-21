'use strict';

let Stack = require('./Stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    let newStack = this.stack1;
    newStack.push(value);
  }

  dequeue() {
    while (this.stack1.top !== null) {
      let top = this.stack1.pop();
      this.stack2.push(top);
    }
    return this.stack2.pop();
  }
}

let queue = new PseudoQueue();
queue.enqueue(20);
queue.enqueue(15);
queue.enqueue(10);
queue.enqueue(5);
let result = queue.dequeue();

console.log(result);

module.exports = PseudoQueue;
