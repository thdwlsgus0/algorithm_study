const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output: process.stdout
});
const fibo = (n) =>{
   let dp =[];
   dp[0]=0;
   dp[1]=1;
   for(let i=2; i<=n; i++){
     dp[i] = dp[i-1]+dp[i-2];
   }
   return dp[n];
}
rl.on('line', function(line){
   console.log(fibo(parseInt(line)));
});