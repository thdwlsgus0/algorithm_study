const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputLength = +input[0];
let answer = '';
for(let i=1; i<=inputLength; i++){
  const [a,b] = input[i].split(' ').map((v)=>+v);
  answer+= a+b+'\n';
}
console.log(answer);