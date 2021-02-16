const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
let [startY, startX] = [1,1];
const planList = input[1].split(' ');
planList.map((v)=>{
   if(startX+1 <= n && v === 'R')startX++;
   if(startX-1 >0 && v === 'L')startX--;
   if(startY+1 <= n && v === 'D')startY++;
   if(startY-1 >0 && v === 'U')startY--;
});
console.log(startY, startX);