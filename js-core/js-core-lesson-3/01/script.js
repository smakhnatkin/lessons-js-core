'use strict';

// const x = 1;
// const y = 2;

// alert(x - y);

// const x = 'Вася';
// const y = 'Петя';

// alert(x / y);

// 1 =======================
// числа
const num = 1;
const count1 = Number('Вася'); // NaN === Not a number
const count = 20;

if (num !== 1) {
    // alert(num);
} else {
    // alert('Иначе');
}

if (count !== NaN) {
    // alert(count);
}

// alert(1/0); // Infinity
if (1/0 === Infinity) {
    // alert('знак бесконечность');
}

const doubleNum = 1.15;
// console.log('doubleNum', doubleNum / 3);

if (1 + 2 === 3) {
    // console.log('Равно');
}


if (0.1 + 0.2 === 0.3) {
    // console.log('Равно');
} else {
    // console.log('Не равно');
}

const x = 0xFF;

// console.log('0xFF', 0xFF)

// двоичная система
// 0000 - 1
// 0001 - 2
// 0010 - 3
// 0011 - 4 
// 0100 - 5
// 0101 - 6
// 0110 - 7
// 0111 - 8


// 2 =============================
const bigInt = 1234567890123456789012345678901234567890n;

// 3 =============================
const name1 = 'Вася Петров'; // string
// alert(name[4]); // 0 1 2 3

const name = 'Сергей';
const secondName = "Владимирович";
const strDiv = '<div class="some"></div>';

const result = name + ' ' + secondName; // ES5


let str3 = `${name} ${secondName} Махнаткин`; // ES2015

console.log(str3); // ?


// console.log(str1, str2, str3);

// 4 ===================
let isStudent = true;
const isTeacher = false;

const notBool = 2 - 1; // num
const isBool = 2 > 1; // true

// динамическая типизация

// console.log(isBool);


// 5 ===================
const nullVar = null;

let countNum = null; 

const getData = () => {};
countNum = getData(); // сервер прислал

// ...

if (countNum === null) {
    // console.log('к серверу не обращались')
} else if (countNum === 0) {
    // console.log('сервер пришли еще раз')
} else {
    // console.log(`Число пользователей: ${countNum}`)
}



// 6 =====================
let someX; 
someX = 'someX';

// 7 =====================
// symbol

// 8 =====================
let rectangle = {
    magic: {
        someMagic: 200
    },
    a: 10,
    b: 12,
}; 

// console.log(rectangle.a)

// const a = rectangle.a;

const { a } = rectangle; // ES2015
// const rectangle = { a: 10 }; // ES2015


console.log(a)




const data = 123;


console.log(typeof undefined); 'undefined'
console.log(typeof 'undefined'); // строка


