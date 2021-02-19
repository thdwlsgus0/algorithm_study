const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const maxHour = +input[0];
let ans = 0;
for(let h=0; h<=maxHour; h++){
  for(let m=0; m<=59; m++){
    for(let s=0; s<=59; s++){
      h = h+'';
      m = m+'';
      s = s+'';
      if(h.includes(3) || m.includes(3) || s.includes(3)){
          ans++;
      }
    }
  }
}
console.log(ans);