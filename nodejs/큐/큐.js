const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const queue = [];
queue.unshift(5);
queue.unshift(2);
queue.unshift(3);
queue.unshift(7);
queue.pop();
queue.unshift(1);
queue.unshift(4);
queue.pop();
console.log(queue);
queue.reverse();
console.log(queue);