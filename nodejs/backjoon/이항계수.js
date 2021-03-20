const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n,k] = input[0].split(' ').map((v)=>+v);

const factorial = (num) =>{
  if(num === 0) return 1;
  let result = 1;
  for(let i=num; i>=1; i--){
    result*=i;
  }
  return result;
}
console.log(factorial(n) / (factorial(k) * factorial(n-k)));