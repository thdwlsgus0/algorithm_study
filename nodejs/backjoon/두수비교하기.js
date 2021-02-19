let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a,b] = input[0].split(' ').map((v)=>Number(v));
if(a>b){
  console.log('>');
}else if(a<b){
  console.log('<');
}else{
  console.log('==');
}