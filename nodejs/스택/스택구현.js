const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();
while(stack.length>0){
  console.log(stack[stack.length-1]);
  stack.pop();
}
console.log(stack);