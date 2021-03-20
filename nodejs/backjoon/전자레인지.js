const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const time = [300, 60, 10];

let n = +input[0];
let ans = '';
for(let i=0; i<3; i++){
  const value = Math.floor(n/time[i]);
  if(value>=1){
    n = n%time[i];
    ans+=value+' ';
  }else{
    ans+=0+' ';
  }
}
if(n!==0){
  console.log(-1);
}
else {
  console.log(ans);
}