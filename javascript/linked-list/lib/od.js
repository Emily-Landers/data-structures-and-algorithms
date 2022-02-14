'use strict'

const LinkedList = require('./list.js');


function odometer(LL) {

  LL.reverse();
  let current = LL.head;

  while(current) {
    if (current.data < 9) {
      current.data++
      break;
    } else if (current.data === 9) {
      current.data = 0;
      current = current.next;
    }
  }
  // EDGE CASE CODE
  if (current.data === 0 && current.next === null) {
    current.next = LL.append(1);
  }

  LL.reverse();
  return LL;
}

module.exports = {odometer}