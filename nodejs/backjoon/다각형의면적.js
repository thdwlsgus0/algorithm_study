let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let ans = 0;
let result = [];
let count = parseInt(input[0]);

const ccw = (pos1, pos2, pos3) =>{
  return (pos1.x * pos2.y + pos2.x * pos3.y + pos3.x * pos1.y) - (pos1.y * pos2.x + pos2.y * pos3.x + pos3.y * pos1.x);
}
for(let i=1; i<input.length-1; i++){
     let pos = {};
     const [x,y] = input[i].split(' ');
     pos.x = parseInt(x);
     pos.y = parseInt(y);
     result.push(pos);
}
console.log(result);
for(let i=1; i<count-1; i++){
     ans += ccw(result[0], result[i], result[i+1]);
}

ans = Math.abs(ans);
ans = (ans/2).toFixed(1);
console.log(ans);
