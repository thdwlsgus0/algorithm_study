const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = +input[0];
let box = 0;
while(true){
  if(n%5===0) {
    box+=Math.floor(n/5);
    console.log(box);
    break;
  }
  n-=3;
  box+=1;
  if(n<0){
    console.log(-1);
    break;
  }
}




