const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const getCounter = (m, arr) => {
  let smallCount = 0;
  for(let i=0; i<m-1; i++){
    let smallValue = Math.max(arr[i], arr[i+1])/Math.min(arr[i], arr[i+1]);
    while(smallValue>2){
      smallValue = smallValue/2;
      smallCount++;
    }
  }
  return smallCount;
}

for(let i=0; i<n; i++){
  let ans = 0;
  const m = +input[2*i+1];
  const arr = input[2*i+2].split(' ').map((v)=>+v);
  ans += getCounter(m, arr);
  console.log(ans);
}

input.pop();
input.pop();

