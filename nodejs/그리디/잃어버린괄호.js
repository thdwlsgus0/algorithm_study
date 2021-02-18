const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const str = input[0].split('-');

for(let i=0; i<str.length; i++){
  if(str[i].includes('+')){
    str[i]= str[i].split('+').reduce((prev, cur)=>Number(prev)+Number(cur));
  }
}
console.log(str.reduce((prev, next)=>(Number(prev)- Number(next))));