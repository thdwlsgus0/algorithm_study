const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
let ans = 0;

for(let i=1; i<=n; i++){
  if(i<100)ans++;
  else{
    i += '';
    let v = i.split('');
    if(+v[0]- +v[1] === +v[1]-+v[2])ans++;
  }
}
console.log(ans);