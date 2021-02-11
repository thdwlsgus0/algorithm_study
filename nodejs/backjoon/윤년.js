const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const year = parseInt(input[0].trim());
const isYoon = (year%4=== 0 && (year %100 !==0 || year % 400 ===0))? 1: 0;
console.log(isYoon);   