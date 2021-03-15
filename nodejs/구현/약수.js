const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();
let arr = input[0].split(' ').sort((a,b)=>a-b).map((v)=>+v);
console.log(arr[0] * arr[arr.length-1]);