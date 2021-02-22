const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [val1, val2] = input[0].split(' ');
const maxValue = (value) => value.split('').map((v)=> v==='5'? '6': v).join('');
const minValue = (value) => value.split('').map((v)=> v==='6'? '5': v).join('');

console.log(+minValue(val1) + +minValue(val2), +maxValue(val1) + +maxValue(val2));

