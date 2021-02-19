const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input.splice(0,1);
let cnt = 0;
input.map((a)=>{
  let l = a.length; 
  let t = 0;
  for(let i=1; i<l; i++){
    if(a[i] === a[i-1] || a.indexOf(a[i]) === i) t =1;
    else {t= 0; break;}
  }
  if(t===1 || l === 1)cnt++;
});
console.log(cnt);
