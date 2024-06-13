"use strict";

function sumFirstHalfOfArray(arr){
  let sum = 0;
for(let i = 0; i< Math.floor(arr.length/2); i++){
  sum += arr[i];
}
return sum;
}

console.log(sumFirstHalfOfArray([1,2,3,4]));
console.log(sumFirstHalfOfArray([10, 20, 30, 40, 50])); 
console.log(sumFirstHalfOfArray([1, 2, 3]));          
console.log(sumFirstHalfOfArray([])); 

     