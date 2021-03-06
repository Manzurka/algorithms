//Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function BiggieSize(arr){
 for(var i = 0; i<arr.length; i++){
   if(arr[i]>0) {
     arr[i]="big";
   }
 }
 console.log(arr);
}

BiggieSize([-1,3,5,-5]);

//Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function PrintLowReturnHigh(arr){
  var highest = arr[0];
  var lowest = arr[0];
  for(var i = 1; i<arr.length; i++){
    if(arr[i]>highest){
      highest=arr[i];
    }
    if(arr[i]<lowest){
      lowest=arr[i];
    }
   
  }
  console.log(lowest);
  return(highest);
}

PrintLowReturnHigh([-1,3,5,-5]);

//Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.
function PrintOneReturnAnother(arr){
  for(var i = 0; i<arr.length; i++){
    if(arr[i] % 2 !=0){
      if(arr.length == 1){
        console.log(arr[0]);
      } else {
        console.log(arr[arr.length-2])
      }
      return arr[i];
    }
  }
}

PrintOneReturnAnother([-1,3,5,-5]);

//Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function DoubleVision(arr){
  var arr2=[];
  for(var i = 0; i<arr.length; i++){
    arr2.push(arr[i]*2);
  }
  return arr2;
}

DoubleVision([-1,3,5,-5]);


//Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function CountPositives(arr){
  var counter=0;
 for(var i = 0; i<arr.length; i++){
    if(arr[i]>0){
      counter++;
    }
  }
  arr[arr.length-1]=counter;
  return(arr);
}

CountPositives([-1,1,1,1]);

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

function EvensandOdds(arr){
  var counter=0;
 for(var i = 0; i<arr.length; i++){
    if(arr[i]%2 != 0){
      counter++;
      if(counter == 3){
        console.log("That is odd");
        counter=0;
      }
    } else {
      counter++;
      if(counter==3){
        console.log("Even");
        counter=0;
      }
    }
 }
}

EvensandOdds([1,3,5,4,6,8,7,9,11]);

//Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

function IncrementTheSeconds(arr){
  var i = 0;
  while(i<arr.length){
    if(i%2 !=0){
      arr[i]+=1;
    }
    console.log(arr[i]);
    i++;
 }
  return arr;
}

IncrementTheSeconds([1,2,4,5,7,9]);

//Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].

function PreviousLength(arr){
  var i = 1; 
  var temp = arr[0];
  var temp2 = arr[0];
  while(i < arr.length){
     temp = temp2;
      if(typeof(arr[i]) == 'string'){
        temp2 = arr[i];
        arr[i] = temp.length;
      }  
    i++;
  }
  return arr;
}

PreviousLength(["hello", "dojo", "awesome"]);

// Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].