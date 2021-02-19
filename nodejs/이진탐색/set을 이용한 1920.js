const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const nList = input[1].split(' ').map((v)=>+v)
const mList = input[3].split(' ').map((v)=>+v);
let set = new Set();
nList.map((v)=> set.add(v));

mList.map((v)=>{
   if(set.has(v))console.log(1);
   else console.log(0);
});