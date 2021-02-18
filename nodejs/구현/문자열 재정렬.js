const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let s = input[0];
s = s.split('');
let charList = [];
let numberList = [];
for(let i=0; i<s.length; i++){
  if(s[i].charCodeAt(0)>=65 && s[i].charCodeAt(0)<=90){
    charList.push(s[i]);
  }else{
    numberList.push(s[i]);
  }
}
charList.sort();
numberList = numberList.sort().map((v)=>+v);
numberList= numberList.reduce((acc, cur)=>{
  return acc+cur;
},0);
charList = charList.concat(numberList).join('');
console.log(charList);