const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0];
const b = input[1];
let count = 0;
let arr1 = Array(26).fill(0);
let arr2 = Array(26).fill(0);
for(let i=0; i<a.length; i++){
  arr1[a.charCodeAt(i)-97]++;
}
for(let i=0; i<b.length; i++){
  arr2[b.charCodeAt(i)-97]++;
}
for(let i=0; i<26; i++){
  if(arr1[i] !== arr2[i]){
    count+= Math.abs(arr1[i] - arr2[i]);
  }
}
console.log(count);


