const number = 8;
let sorted = new Array(8);
const merge = (a, m, middle, n) =>{
   let i = m;
   let j = middle + 1;
   let k = m;
   // 작은 순서대로 배열에 삽입 
   while(i<=middle && j<=n){
     if(a[i]<=a[j]){
       sorted[k] = a[i];
       i++;
     }else{
       sorted[k] = a[j];
       j++;
     }
     k++;
   }
   if(i > middle){
     for(let t= j; t<=n; t++){
       sorted[k] = a[t];
       k++;
     }
   }else{
     for(let t=i; t<=middle; t++){
       sorted[k] = a[t];
       k++;
     }
   }
   for(let t= m; t<=n; t++){
     a[t]= sorted[t];
   }
}
const mergeSort = (a, m ,n)=>{
  if(m<n){
    const middle = (m+n)/2;
    mergeSort(a, m, middle);
    mergeSort(a,middle+1, n);
    merge(a,m,middle,n);
  }
}
let array =[7,6,5,8,3,5,9,1];
mergeSort(array, 0, number-1);
for(let i=0; i<number; i++){
  console.log(array[i]);
}