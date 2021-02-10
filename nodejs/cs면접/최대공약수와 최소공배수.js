
const readline = require('readline');
const r1 = readline.createInterface({
   input:process.stdin,
   output:process.output
});
const input = [];
r1.on('line', line=>{
  input.push(line.split(' '));
}).on('close', ()=>{
 const t = parseInt(input[0]);
 for(let i=1; i<=t; i++){
   const a = parseInt(input[i][0]);
   const b = parseInt(input[i][1]);
   console.log(a+b);
 }
 process.exit();
});
