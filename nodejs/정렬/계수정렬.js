let array = [7,5,9,0,3,1,6,2,9,1,4,8,0,5,2];

let count = Array(10).fill(0);
for(let i=0; i<array.length; i++){
  count[array[i]]++;
}
for(let i=0; i<10; i++){
  for(let j=0; j<count[i]; j++){
    console.log(i);
  }
}