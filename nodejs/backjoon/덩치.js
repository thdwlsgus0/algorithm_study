const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.shift();
let answer = [];
for(let i=0; i<input.length-1; i++){
  let order = 1;
  const [weight, tall] = input[i].split(' ').map((v)=>+v);
  for(let j=0; j<input.length-1; j++){
    const [otherWeight, otherTall] = input[j].split(' ').map((v)=>+v);
    if(weight<otherWeight && tall < otherTall){
      order++;
    }
  }
  answer.push(order);
}
answer.map((v)=>console.log(v));