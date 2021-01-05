const selectionSort = (arr) => { 
   const length = arr.length;
   let tmp,j;
   for(let i=0; i<length-1; i++){
     let min = i; 
     for(j=i+1; j<length; j++){
         if(arr[j] < arr[min]){
           min = j;
         }
     }
     tmp = arr[min];
     arr[min] = arr[i];
     arr[i] = tmp;
   }
   return arr;
}
const arr = [41,34,6,38,36,28,43,42,45];
console.log(selectionSort(arr));