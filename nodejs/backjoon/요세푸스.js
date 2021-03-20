const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,k] = input[0].split(' ').map((v)=>+v);

const queue = [];
for(let i=1; i<=n; i++){
  queue.push(i);
}
let cnt = 0;
let str = '<';
while(queue.length>1){
  cnt++;
  if(cnt%k===0){
    str+= queue.shift()+', ';
  }else{
    queue.push(queue.shift());
  }
}
str+=queue.pop()+'>';
console.log(str);