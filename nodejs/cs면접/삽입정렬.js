const insertionSort = (arr) =>{
    let i,j,key;
    const len = arr.length; 
    for(i=1; i<len; i++){
        key = arr[i];
        for(j=i-1; j>=0 && arr[j]> key; j--){
            arr[j+1]= arr[j];
        }
        arr[j+1]= key;
    }
   return arr;
}

const arr = [8,5,6,2,4];
console.log(insertionSort(arr));