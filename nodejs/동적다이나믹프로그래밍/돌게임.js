const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = +input[0];
console.log((n%2===1? 'CY':'SK'));