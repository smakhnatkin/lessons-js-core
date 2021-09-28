'use strict';

// =====================================================
// методы чисел
let num = 10;
num.toString()                      // преобразование в строку
typeof num.toString()               // 'string'
12..toString()                      // чтобы отличить от дробного

12.4.toFixed()                      // '12' 
12.5.toFixed()                      // '13' 
typeof 12.5.toFixed()               // 'string'

// =====================================================
// специальные функции
parseInt('100px');                  // 100
parseInt('100.2.3');                // 100
parseFloat('100.2.3');              // 100.2
NaN === NaN                         // false
Object.is(NaN, NaN);                // true
isNaN('100');                       // false, число
isNaN('some');                      // true, не число
isFinite('100');                    // true, число и не NaN/Infinity/-Infinity
isFinite(NaN);                      // false, число, но NaN

// =====================================================
// использование специального класса  Math
Math.floor(12.4);                   // 12
Math.floor(12.5);                   // 12

Math.ceil(12.4);                    // 13
Math.ceil(12.5);                    // 13

Math.round(12.4);                   // 12
Math.round(12.5);                   // 13

Math.random()                       // возвращает случаеной число от 0 до 1
Math.min(1, 2);                     // 1
Math.max(1, 2);                     // 2
Math.pow(10, 3);                    // 10 в 3 степени === 1000
