let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for(let i=0; i<array.length; i++){
  for(let j=0; j<array.length-i; j++){
    if(array[j] > array[j+1]){
      let temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
    }
  }
}
console.log(array);