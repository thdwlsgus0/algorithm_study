const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const str = input[0].split('');
while(str.length>0){
  console.log(str.splice(0,10).join(''));
}