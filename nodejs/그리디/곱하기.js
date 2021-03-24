const readline = require('readline');
const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

const solve = (line) => {
  let result = +line[0];
  for(let i=1; i<line.length; i++){
    result = Math.max(result+parseInt(line[i]), result * parseInt(line[i]));
  }
  return result;
}

rl.on('line', function(line){
  console.log(solve(line)); 
  rl.close();
}).on('close', function(){
  process.exit();
});
