const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const solve = (l, p, v) => {
   let plus = 0;
   const mok = Math.floor(v/p);
   const namerge = v % p;
   plus =  (l > namerge)? namerge : l;
   return l * mok + plus; 

}
let cnt = 1;
rl.on('line', function(line){
  const [l, p, v] = line.split(' ').map((v)=>+v);
  if(p === 0 && l === 0 && v === 0){
    rl.close();
  }
  console.log(`Case ${cnt}: ${solve(l,p,v)}`);
  cnt++;
}).on('close', function(){
  process.exit();
});