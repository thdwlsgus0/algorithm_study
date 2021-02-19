const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,k] = input[0].split(' ').map((v)=>+v);
input.shift();
let a = input[0].split(' ').map((v)=>+v)
let b = input[1].split(' ').map((v)=>+v);
a.sort((a,b)=>a-b);
b.sort((a,b)=>b-a);
let sum = 0;
for(let l=0; l<k; l++){
   sum+=b[l];
}
for(let j=k; j<a.length; j++){
   sum+=a[j];
}
console.log(sum);