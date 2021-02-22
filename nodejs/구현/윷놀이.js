// switch문이 더 좋을 듯?
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = ['E', 'A', 'B', 'C', 'D'];

for(let i=0; i<input.length-1; i++){
  const count = input[i].split(' ')
                        .map((v)=>+v)
                        .filter((v)=> v===0).length;
  console.log(arr[count]);
}
