"use strict";

function lastSymbol(str){
  if (str.length === 0) {
    console.log("Строка пуста");
  } else {
    console.log(str[str.length - 1]);
  }
}


lastSymbol("Hello");  
lastSymbol("World");  
lastSymbol("");      