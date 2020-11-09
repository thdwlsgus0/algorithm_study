const bubbleSort = (arr) =>{
   for(let i =0; i<arr.length; i++){
       for(let j=1; j<arr.length-i; j++){
           if(arr[j-1]>arr[j]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j]= temp;
           }
       }
   }
}
const swap = (a,b)=>{

}
let arr = [41,34,6,38,36,28,43,42,45];
bubbleSort(arr);
console.log(arr);