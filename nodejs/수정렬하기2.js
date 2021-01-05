const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
});
let input = [];
rl.on("line", (line)=>{
  input.push(line);
}).on("close",()=>{
  Solve(input);
  process.exit();
});

const Solve = (input)=>{
   const count =input.shift();
   input.map((v)=>parseInt(v))
        .sort((a,b)=>a-b)
        .map((v)=>console.log(v));
}