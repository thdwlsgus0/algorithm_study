const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i=1; i<input.length-1; i++){
  const [a,b] = input[i].split(' ').map((v)=>+v);
  console.log(a+b);
}