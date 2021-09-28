'use strict';

// свойства и методы строк
let name = 'Надежда';
console.log(name.length);           // вернет длину строки === 7

name.toLowerCase();                 // надежда
name.toUpperCase();                 // НАДЕЖДА


const userNameFromBase = getNameFromBase(); // 'Надежда'
const user = getName();                     // 'НАДеЖДА'


if (userNameFromBase.toLowerCase() === user) {
    alert('Пароль верный');
} else {
    alert('Пароль не верный');
}

function getName() {
    return 'НaДеЖДА';
}

const userNameBad = getName();              // 'НaДеЖДА'
const userNameLowerCase = userNameBad.toLowerCase();       // 'надежда'
const firstLetterOfUserNameBad = userNameLowerCase[0].toUpperCase(); // 'Н'
const cuttedUserNameLowerCase = userNameLowerCase.slice(1); // 'адежда'
const result = firstLetterOfUserNameBad + cuttedUserNameLowerCase;
console.log(result);












'  Надежда  '.trim();               // Надежда, удаляет пробелы по краям

// Разбивает строку по подстроке и создает массив ['Надежда', 'Петрова']
'Надежда Петрова'.split(' ');  // ['Надежда', 'Петрова'] 

'Надежда Петрова'.split('а');  // ['Н', 'дежд', ' Петров']



// const obj = {
//     name: 'Иван',
//     surname: 'Петров'
// };

// const fructs = ['яблоко', 'лимон', 'ананас'];

// получение символа
name.charAt(2)                      // вернет 3 символ === 'д'
name[2]                             // строка как масссив, вернет 'д'

// поиск подстроки
name.indexOf('д');                  // 2
name.includes('д');                 // true
name.startsWith("На");              // true, 'На' — начало 'Надежда'
name.endsWith("да");                // true, 'да' — конец 'Надежда' 

// поиск по регулярному выражению 
// в результатае – массив, первый элемент которого будет 'Надежда'
'Надежда Петрова'.match(/Надежда/);

// обрезка
name.slice(2, 3);                   // 'д' начало и конец
name.slice(-2, -1);                 // 'д' могут быть отрицательными
name.slice(3, 2);                   // ''  

name.substring(2, 3);               // 'д' начало и конец
name.substring(3, 2);               // 'д' можно менять местами
name.substring(-2, -1);             // ''

name.substr(2, 1);                  // 'д' начало и количество
'12-34-56'.replace("-", ":")        // замена подстркои 12:34-56
