// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const len = input[0].length;
// const arr = input[0].split('');
// let result = +arr[0];
// for(let i=1; i<len; i++){
//   const v = +arr[i];
//   result = (result+v)>=(result*v)? (result+=v):(result*=v);
// }
// console.log(result);

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input[0].split('');
let result = +data[0];
for(let i=1; i<data.length; i++){
  let num = +data[i];
  if(num<=1 || result<=1){
    result+=num;
  }else{
    result*=num;
  }
}
console.log(result);
