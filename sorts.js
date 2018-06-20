function bubbleSort(arr){
    var count=arr.length;
    while(count >= 0){
      for (var i=0; i<count;i++) {
        if(arr[i]>arr[i+1]) {
          temp=arr[i];
          arr[i]=arr[i+1];
          arr[i+1]=temp;
        }
      }
      count--;
    }
    console.log(arr);
  }
  bubbleSort([2,5,8,0,1,4,7,3,6]);

 function selectionSort(arr){
    for (var i = 0; i < arr.length; i++){
        var maxIdx = 0;
        for (var j = 1; j < arr.length-i; j++){
            if (arr[j] > arr[maxIdx]){
                maxIdx = j;
            }
        }
        var temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[maxIdx];
        arr[maxIdx] = temp;
    }
}
var arr1 = [5,3,1,6,2,0,4];
selectionSort(arr1);
console.log(arr1);


function insertionSort(arr){
    for (var i=0; i<arr.length; i++){
      var p = arr[i]; //saving each element in array as a p 
      var b = i-1; //to track previous element
      while(b>=0 && arr[b]>p){ // cannot be a negative index and the previous index should be less than p 
        arr[b+1]=arr[b];// shifting elements to the right
        b--;//to check each element on the left
      }
        arr[b+1]=p;//assigning p to empty space
    }
    return(arr);
  }
  insertionSort([4,1,3,2]);