const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
let str ='';
for(let i=n; i>=1; i--){
  str+=i+'\n';
}
console.log(str);