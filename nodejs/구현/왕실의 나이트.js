const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const dx = [-2,-1,1,2,2,1,-1,-2];
const dy = [-1,-2,-2,-1,1,2,2,1];
let [col, row] = input[0].split('');
col = col.charCodeAt(0) - 97;
row = +row - 1 ;
let ans = 0;
for(let i=0; i<8; i++){
  let nextX = col+dx[i];
  let nextY = row+dy[i];
  if(nextX>=0 && nextX<8 && nextY>=0 && nextY<8){
    ans++;
  }
}
console.log(ans);