"use strict";


try {
  var a = 1;
  var a = 2;  // Допустимо
  console.log('var a:', a);  // Вывод: 2
} catch (e) {
  console.error('var a error:', e.message);
}


try {
  let b = 1;
  let b = 2;  // Ошибка
  console.log('let b:', b);
} catch (e) {
  console.error('let b error:', e.message); 
}


try {
  const c = 1;
  const c = 2;  // Ошибка
  console.log('const c:', c);
} catch (e) {
  console.error('const c error:', e.message);  
}
