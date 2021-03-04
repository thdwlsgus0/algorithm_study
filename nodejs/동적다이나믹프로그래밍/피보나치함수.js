const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();
const zeroArray = [1,0,1];
const oneArray = [0,1,1];

const cal = (number) => {
  for(let i=3; i<=number; i++){
    zeroArray.push(zeroArray[i-1] + zeroArray[i-2]);
    oneArray.push(oneArray[i-1] + oneArray[i-2]);
  }
}
cal(40);
for(let i=0; i<n; i++){
  const v = +input[i];
  console.log(zeroArray[v], oneArray[v]);
}