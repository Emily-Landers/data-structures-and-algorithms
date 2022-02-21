'use strict';

let validateBrackets = string => {
  let stack = [];
  let parensGroup = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i =0; i < string.length; i++) {
    if(string[i].includes(parensGroup)) {
      stack.push(string[i]);

    } else {

      let lastParen = stack.pop();
      if(string[i] !== parensGroup[lastParen]) {
        return false;
      }
    }
  }

  if(stack.length !== 0) {
    return false;
  }
  return true;
};

console.log(validateBrackets('(){}[]'));
console.log(validateBrackets('[({()]})[]()'));
