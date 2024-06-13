'use strict';


function isNumInArray(arr, value){
if(arr.includes(value)){
    return true;
}
return false;
}

console.log(isNumInArray([1, 2, 3], 2)); 
console.log(isNumInArray([1, 2, 3], 4));  
console.log(isNumInArray(['a', 'b', 'c'], 'b'));  
console.log(isNumInArray(['a', 'b', 'c'], 'd'));  