const array = [7,6,5,8,3,5,9,1];

const merge = (array, m, middle, n) => {
  let i = m;
  let j = middle + 1;
  let k = m;
  while(i<=middle && j<=n){
    if(array[i] <= array[j]){
      sorted[k] = array[i];
      i++;
    }
  }
}

const mergeSort = (array, m, n) => {
  if(m<n){
    let middle = Math.floor((m+n)/2);
    mergeSort(array, m, middle);
    mergeSort(array, middle+1, n);
    merge(a,middle,n);
  }
}

mergeSort(array, 0, array.length-1);
