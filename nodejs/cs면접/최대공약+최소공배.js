const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gcd = (a,b)=>{
   return a%b===0?b:gcd(b, a%b);
}
rl.on('line', function(line){
  const [a,b] = line.split(' ');
  console.log(gcd(a,b));
  console.log(a*b/gcd(a,b));
}).on('close', function(){
  process.exit();
})