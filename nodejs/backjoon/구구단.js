const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = parseInt(input[0]);
for(let i=1; i<=9; i++){
  console.log(`${a} * ${i} = ${a*i}`);
}