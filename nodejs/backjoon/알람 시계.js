const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ').map((v)=>+v);
if(b-45<0){
  a = a===0? 23: (a-=1); 
  b +=15;
}else{
  b-=45;
}
console.log(a,b);