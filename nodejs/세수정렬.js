const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.on('line', (line)=>{
  let str ="";
  line = line.split(' ')
      .map((v)=>parseInt(v))
      .sort((a,b)=>a-b);
  line.map((v)=>str+=v+" ");
  console.log(str);
}).on('close', ()=>{
  process.exit();
})