const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
const list = input[1].split(' ').map((v)=>+v);
list.sort((a,b)=>a-b);

let sum = [];
list.reduce((prev, cur, index) =>{
    sum.push(prev+cur);
    return prev+cur;
},0);

console.log(sum.reduce((prev, cur)=>{
  return prev+cur;
},0));