function ReturnOddsArray1to255(){
    var arr=[];
    for (var val =1; val<=255; val+=2)
    {
    arr.push(val);
    }
    console.log(arr);
}

    ReturnOddsArray1to255();

function SquareArray(arr) {
    for (i=0; i<arr.length; i++){
        arr[i]=arr[i]**2;
    }
        return arr;
}
    SquareArray([1,2,4]);

function GreaterThanY(arr,y) {
    var num=0;
    for ( var i=0; i<arr.length; i++){
        if (arr[i]>y) {num++;}
    } 
    return(num);
} 
    GreaterThanY([4,2,1],1);

function Print1to255(){
    for(var i=1; i<=255; i++){
        var total=0;
        total=i+total;
    }
    
}
console.log(i,"the sum is");

function rotateLeft(arr){
    for(var x=1; x<arr.length; x++){
        var temp=arr[0];
        arr[0]=arr[arr.length-x];
        arr[arr.length-x]=temp;
    }
    console.log(arr)
    }
    
    rotateLeft([1,2,3,5]);
    //short version 
function rotateLeft(arr){
    var temp = arr[0];
    for (var i = 1; i < arr.length; i ++){
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
    console.log(arr);
}
rotateLeft([ 1, 2, 3, 4, 6, 7, 8, 9, 10 ]);
    
function reverseArray(arr){
    var newArray=[];
    var temp=arr[0];
    for(var i=1; i<arr.length; i++){
        x=arr[arr.length-i];
        newArray.push(x);
    }
    newArray.push(temp);
    return newArray;
    }
    //shortened version
    function reverseArray(arr){
    newarr = [];
    for (i = arr.length - 1; i >= 0; i--){
        newarr.push(arr[i]);
    }
        console.log(newarr);
    }
    reverseArray([1,2,3,4]);
    
function NumbersOnly(arr){
    var newArray = [];
    for(i=0; i<arr.length; i++){
        if (typeof arr[i] === "number"); {
                newArray.push(arr[i]);
                return(newArray);
        }
    }
}
    NumbersOnly(["apple",56,89]);


function min_max_avrg (arr){
    var min=arr[0];
    var max=arr[0];
    var avg =0;
    for ( var i=0; i<arr.length; i++){
        if (typeof arr[i] === "string"){
            console.log("not a number")
            continue;
        }
        if (arr[i]<min){
            min=arr[i];
        }
        if (arr[i]>max){
            max=arr[i];
        }
    var avg = avg+arr[i];
}
    avg=avg/arr.length;
    console.log("the minimum is "+min)
    // console.log(Math.min(arr));
    console.log("the maximum is "+max)
        // console.log(Math.max(arr));
    console.log("the average is "+avg)
}
    min_max_avrg ([1,2,3,4]);

function zeroOutNegatives(arr){
    for (var i=0; i<arr.length; i++){
         if (arr[i]<0){
             arr[i]=0;
         }
    }
    return(arr);
  }
 zeroOutNegatives(["apple", -3, 4]);

function pushFront (arr, x){
    for(var i=arr.length; i>0; i--){
        arr[i]=arr[i-1];
      }
        arr[0]=x;
      }
      console.log(arr, x);
 pushFront([1,2,3], 2);
      
function popFront(arr){
    var temp=arr[0];
    for(var i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
          }
        arr.pop();
        console.log(arr);
        return temp;
        }
 popFront([1,2,3]);

 function shiftValues(arr)
{
    for (var i = 1; i < arr.length; i ++)
    {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
}
shiftValues([ -2, 4, 6, 8, 9 ])

 function insertAt(arr,index,value){
     for(var i=arr.length; i>index; i--){
         arr[i]=arr[i-1];
     }
     arr[index]=value;
     console.log(arr);
 }
 insertAt([1,2,3],1,4);

 function removeAt(arr,index){
     var temp = arr[index];
    for(var i=index; i<arr.length; i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=temp;
    return arr.pop();
    console.log(arr);
}
removeAt([1,2,3],1)

function swapPairs(arr){
    for(i=0;i<arr.length-1;i+=2){
        var temp = arr[i];
        arr[i]=arr[i+1]
        arr[i+1]=temp
    }
    console.log(arr)
}
swapPairs([1,2,3,4]

function removeDuplicates(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]==arr[i+1]){
       for (var a = i; a < arr.length; a ++){
       arr[a] = arr[a+1];
       }
       i--; //to double check for duplicates - to get i back to its old position
     arr.pop();
    }
  }
  console.log(arr)
}
removeDuplicates([1,2,2,2,3,3,4]);

function reverse(arr) {
    for (var i = 0; i < (arr.length / 2); i++) {
        var temp = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = arr[i];
        arr[i] = temp;
    }

    console.log(arr);
}
reverse([1, 2, 3, 4]);

function mintoFront(arr) {
    var temp_min = arr[0];
    var temp_posmin = 0;

    for (var i = 1 ; i < arr.length; i++){
          if (temp_min > arr[i]){
                temp_min= arr[i];
                temp_posmin = i;
          }
    }
    for (var i = temp_posmin ; i > 0; i--){
          arr[i] = arr[i-1];
    }
    arr[0] = temp_min;

    console.log(arr);
}

mintoFront([4,2,1,3,5,4,89,20,-56,0]);


function rotateArray_ShiftBy(arr, shift){
    for(var i=0; i<shift; i++){ //keep running second for loop to reach the desired 'shift by' amount.
        for(var x = arr.length-1; x>0;x--){
            var temp =arr[x]; // reassigning the 
            arr[x]=arr[x-1];
            arr[x-1]=temp;
        }
    }
    console.log(arr);
}

rotateArray([1,2,3,4], 1)

function rotate(arr,rotation){
    if (rotation/arr.length == 0){ //to check if the rotation amount is less than arr.length to avoid using code unneccessarily
        for(var i=0;i<rotation;i++){
            var temp=arr[arr.length-1];
            for(var count=arr.length-1;count>0;count--){
                arr[count]=arr[count-1];
            }
            arr[0]=temp
        }
    }
    console.log(arr);
}
rotate([1,2,3,4,5], 4)

function concat(x,y){
    var z=[];
    for (var i=0; i<x.length; i++){
      z[i]=x[i]// or z.push(x[i])
    }
    for (var i=0; i<y.length; i++){
      z[z.length]=y[i] //or z.push(y[i])
    }
    console.log(z);
  }
  concat([1,2,3],["a","b"])


function removeBlanks(str){
    var newStr="";
    for(var i=0; i<str.length; i++){
        if (str[i]!=" "){
            newStr+=str[i];
        }
    }
    console.log(newStr)
}

removeBlanks(" hel lo w orl d")

// function getIntegers(str){
//     newStr="";
//     for(var i=0; i<str.length; i++){
//         if (str[i]=="number"){
//             newStr+=str[i];
//         }
//     }
//     console.log(newStr)
// }
// removeBlanks("0rjg465osigfjg-10")

function getIntegers(str){
    newStr="";
    for(var i=0; i<str.length; i++){
        if (str[i]>=0){
            newStr+=str[i];
        }
    }
    console.log(newStr);
}
removeBlanks("0rjg465osigfjg-10")

function reverseString(str){
    var newStr="";
    for (var i=str.length-1;i>=0;i--){
      newStr+=str[i];
    }
    return(newStr);
  } 
reverseString("helloworld")

  function acronyms(str){
    var newStr="";
    newStr+=str[0];
    for (var i=1;i<str.length;i++){
      if (str[i]==" "){
      newStr+=str[i+1];
      }
    }
    return newStr.toUpperCase();
  } 
  
  acronyms("laugh out loud")

  function nonBlanks(str){
    var count=0;
    for (var i=0;i<str.length;i++){
      if (str[i]!=" "){
         count+=1;
      }
    }
    return (count);
  } 
  nonBlanks(" he  ll o worl d")

  function palindrome(str){
    for (var i=0; i<str.length/2; i++){
      if (str[i]==str[(str.length-1)-i]){
        return true;
      }
        return false;
    }
  }
  palindrome('racecar')

  function parensValid(strng){
    var parens = 0
    for (var i = 0; i <strng.length;i++){
      if(parens<0){
        return false;
      }
      else{
        if (strng[i]=="("){
          parens+=1;
        }
        else if (strng[i]==")"){
          parens-=1;
        }
      }
    }
    if (parens!==0){
      return false;
    }
    return true;
  }
  
  parensValid("(()(()(())))")

  function coins(coins){
    var obj={"quarters":0, "dimes":0, "nickels":0, "pennies":0,};
    while(coins>24){
      coins-=25;
      obj.quarters+=1;
    }
    while(coins>9){
      coins-=10;
      obj.dimes+=1;
    }
    while(coins>4){
      coins-=5;
      obj.nickels+=1;
    }
    while(coins>0){
      coins-=1;
      obj.pennies+=1;
    }
    return (obj);
  }
  
  coins(268);

  function minMaxavg(arr){
    var obj={"min": arr[0], "max": arr[0], "avg":0};
    for(var i=0; i<arr.length; i++){
      obj.avg+=arr[i];
      if (arr[i]<obj.min){
        obj.min=arr[i];
      }
      else if (arr[i]>obj.max){
        obj.max=arr[i];
      }
    }
    obj.avg=obj.avg/arr.length;
    return (obj);
  }
  
  minMaxavg([1,2,3,4,5])

  function removeEvenLength(arr){
      for (var i=0;i<arr.length;i++){
          if (arr[i].length%2 ==0){
          for(var x=i;x<arr.length;x++){
              arr[x]=arr[x+1];
          }
          arr.pop();
        }
      }
      return arr;
  }
  removeEvenLength(["Nope", "aloha","cool","a", "aha"]);

  