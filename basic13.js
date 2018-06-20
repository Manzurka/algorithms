function printOneTo255(){
    for (var i=1; i<256; i++){
      console.log(i);
    }
  }
  printOneTo255();
  
  function printSumOneTo255(){
    var sum=0;
    for (var i=1; i<256; i++){
      sum+=i;
    }
    console.log(sum)
  }
  printSumOneTo255();
  
  function printMaxofArray(arr){
    var max=arr[0];
    for (var i=1; i<arr.length; i++){
      arr[i]>max;
      max=arr[i];
    } 
    console.log(max);
  }
    printMaxofArray([34,56,78,98])
    
  function OddsOneTo255(){
    for (var i=1; i<256; i+=2){
  
      console.log(i);
    }
  }
    OddsArrayOneTo255();
  
  function GreaterThanY(arr,y){
    count=0;
    for (var i=0; i<arr.length; i++){
      if(arr[i]>y) {
      count+=1;
      console.log(arr[i]);
    }
    }
    console.log("There are " + count + " numbers in the array greater than " + y);
  }
  GreaterThanY([1,2,3,4,5],3);
  
  function MaxMinAvg(arr){
    var max=arr[0];
    var min=arr[0];
    var sum=arr[0];
    for(var i=1; i<arr.length; i++){
      if (arr[i] > max){
        max=arr[i];
      }
      if (arr[i] < min){
        min=arr[i];
      }
      sum+=arr[i];
    }
    var avg=sum/arr.length;
    console.log("Max is " + max,"Min is "+ min, "Average is "+avg);
  }
      MaxMinAvg([2,3,7,8]);
      
      
  function SwapStringForNegatives(arr){
    for(var i=0; i<arr.length; i++){
      if (arr[i] <0){
        arr[i]="string"
      }
    }
      console.log(arr);
  }
    SwapStringForNegatives([-1, 4, -67, -5.7, 6]);
      
  function OddstoArrayOneTo255(){
    var arr=[];
    for (var i=1; i<256; i+=2){
      arr.push(i);
    }
    console.log(arr);
  }
    OddstoArrayOneTo255();
    
  function printArrayValues(arr){
    for (var i=0; i<arr.length; i++){
      console.log(arr[i]);
    }
  }
    printArrayValues([1,2,3,4,5]);
    
  function printAverageOfArray(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
      sum+=arr[i];
    }
    var avg=sum/arr.length;
    console.log(avg);
  }
    printAverageOfArray([2,7,3,8]);
    
  function SquareArrayValues(arr){
    for (var i=0; i<arr.length; i++){
      arr[i]=arr[i]*arr[i] 
    }
    console.log(arr);
  }
    SquareArrayValues([2,7,3,8]);
  
    function ZeroOutArrayNegativeValues(arr){
    for(var i=0; i<arr.length; i++){
      if (arr[i] <0){
        arr[i]=0
      }
    }
       console.log(arr);
  }
  ZeroOutArrayNegativeValues([-4,-49, 9,64 ]);
  
  function ShiftArrayValuesLeft(arr){
    var temp=arr[0];
    for(var i=0; i<arr.length-1; i++){
      arr[i]=arr[i+1];
    }
      arr[arr.length-1]=temp;
      console.log(arr);
  }
  ShiftArrayValuesLeft([ 4, 49, 9, 64 ]);