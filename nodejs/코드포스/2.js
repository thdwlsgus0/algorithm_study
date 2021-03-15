const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];

const getNumber = () => {
  let sum;
  let ans = 0;
  for(let i=1; i<=input.length; i+=2){
    sum = Array(parseInt(3)).fill(0);
    const arr = input[i].split(' ').map((v)=>+v);
    const arrLen = arr.length;
    arr.map((v)=>{
      sum[v%3]++;
    });
    while(sum[0] !== sum[1] || sum[0] !== sum[2] || sum[1] !== sum[2]){
      for(let j=0; j<arr.length; j++){
        
      }
    }
  }

}

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
  input.shift();
  input.pop();
  getNumber();
  process.exit();
});