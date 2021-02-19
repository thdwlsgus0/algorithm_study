const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
let str = '';
for(let i=1; i<=n; i++){
  str+=i+'\n';
}
console.log(str);