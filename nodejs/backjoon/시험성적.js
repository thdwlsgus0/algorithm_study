const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const score = parseInt(input[0].trim());
if(score>=90 && score<=100)console.log('A');
else if(score>=80 && score<90)console.log('B');
else if(score>=70 && score<80)console.log('C');
else if(score>=60 && score<70)console.log('D');
else console.log('F');