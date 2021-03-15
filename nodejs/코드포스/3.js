const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();
const isThree = (m) => {
  for(let j=1; j*j*j<m; j++){
    let other = m-j*j*j;
    let value = Math.cbrt(other);
    if(value*value*value=== other) {
      return true;
    }
  }
  return false;
}
for(let i=0; i<n; i++){
  const m = +input[i];
  if(isThree(m)){
    console.log("YES");
  }else{
    console.log("NO");
  }
}