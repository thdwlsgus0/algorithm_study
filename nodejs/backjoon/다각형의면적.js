let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let ans = 0;
let result = [];
let count = +input[0];

const ccw = (pos1, pos2, pos3) =>{
  return (pos1.x * pos2.y + pos2.x * pos3.y + pos3.x * pos1.y) - (pos1.y * pos2.x + pos2.y * pos3.x + pos3.y * pos1.x);
}
for(let i=1; i<input.length-1; i++){
     let pos = {};
     let [x,y] = input[i].split(' ');
     pos.x = +x;
     pos.y = +y;
     result.push(pos);
}
for(let i=1; i<count-1; i++){
     ans += ccw(result[0], result[i], result[i+1]);
}

ans = Math.abs(ans);
if(ans%2===0) {
     ans = Math.floor(ans/2);
     console.log(ans+".0");
}
else {
     ans = Math.floor(ans/2);
     console.log(ans+".5");
}
