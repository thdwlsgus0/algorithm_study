const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();
for(let i=0; i<n; i++){
  const [a,b] = input[i].split(',').map((v)=>+v);
  console.log(a+b);
}