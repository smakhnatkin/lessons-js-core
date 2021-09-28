'use strict';

// операторы 

alert( 8 % 3 ); // 2, остаток от деления 8 на 3
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)

// всегда число
const x1 = 3 / '2';          // 1.5 
const x2 = '2' - 1;          // 1 
const x3 = 1 + true;         // 2
const x4 = false + true;     // 1
const x7 = '2' - 0;          // 2 

// кроме случая, когда один из операндов – строка
const x5 = '2' + 1;          // '21' 
const x6 = '2' + 0;          // '20' 


const x8 = Number('2') + 1;  // 3 
const x9 = parseInt('2') + 1;// 3
const x10 = 1 + +'2';        // 3

let i = 1;  // 1
i = i + 1;  // 2
i = i + 1;  // 3
i = i + 1;  // 4
i = i + 1;  // 5

i++;        // i = i + 1;  // 5; i === 6
++i;        // i = i + 1;  // i === 7; 7


// 5 > 4
// "ананас" > "яблоко"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"




if ('Вася'.indexOf('vv') === 1) {
    alert('нашли!');
} 