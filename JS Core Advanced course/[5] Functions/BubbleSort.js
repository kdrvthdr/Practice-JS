"use strict";

function sumFirstHalfOfArray(arr){
for(let i = 0; i< arr.length-1; i++){
  let wasSwap = false;
  for(let j = 0; j< arr.length-i; j++){
    if(arr[j]>arr[j+1]){
      const temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      wasSwap = true;
    }
  }
  if (!wasSwap) 
    break;
}
return arr;
}

console.log(sumFirstHalfOfArray([5,3,7,1,4]));
console.log(sumFirstHalfOfArray([33,13,7,66,33,10]));
console.log(sumFirstHalfOfArray([20,18,44,1,7,9]));


     