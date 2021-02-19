const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = +input[0];
const coin = [500, 100, 50, 10];
let ans = 0;
coin.map((v,i)=>{
   ans+=Math.floor(n/v);
   n%=v;
});
console.log(ans);