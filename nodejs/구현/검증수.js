const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const value = input[0].split(' ')
                    .map((v)=>+v * +v)
                    .reduce((acc, cur)=>{
                      return acc+cur;
                    });
console.log(value % 10);