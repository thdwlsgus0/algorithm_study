const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,k] = input[0].split(' ').map((v)=>+v);
const queue = [];
for(let i=1; i<=n; i++){
  queue.push(i);
}
let t = 0;
const ans = [];
while(queue.length>0){
  t+= k-1;
  t %= queue.length;
  ans.push(queue.splice(t, 1)[0]);
}
console.log('<'+ans.join(', ')+'>');
