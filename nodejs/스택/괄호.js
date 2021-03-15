const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();
for(let i=0; i<n; i++){
  let stack = [];
  const galhoStr = input[i].split('');
  for(let j=0; j<galhoStr.length; j++){
    if(galhoStr[j] === '(')stack.push('(');
    else if(stack.length>0 && stack[stack.length-1] === '('){
      stack.pop();
    }else{
      stack.push(galhoStr[j]);
    }
  }
  if(stack.length>0)console.log('NO');
  else console.log('YES');
}
