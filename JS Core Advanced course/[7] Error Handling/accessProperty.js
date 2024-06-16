"use strict";

function accessProperty(obj){
  try {
    return obj.property;
  } catch (e) {
    if(e instanceof TypeError){
      console.error("Ошибка: доступ к свойству неопределенного объекта.");
      return undefined;
    }else{
      throw e;
    }
  }
}

let obj = {property : 1}
console.log(accessProperty(obj));

obj = undefined;
console.log(accessProperty(obj));