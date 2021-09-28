'use strict';

// ================================================
// методы объекта
let obj = {					    // объект
	name: 'Что-то',			    // поле
	getSome: function() {       // метод
        return 15;
    },	    
    x: 100
};

function F() {
    return 15;
}

console.log(F);                 // function F() { return 15; }
console.log(F());               // 15

console.log(obj.x);             // 100
console.log(obj.getSome);       // function() { return 15; }

console.log(obj.getSome());     // ?




obj.getSome()				    // вызов метода

// строка, которая ведет себя как объект
let str = 'some';			    // строка
str.toUpperCase();			    // вызов метода 

// число, которое ведет себя как объект
let double = 12.34;			    // число
double.toFixed();				// вызов метода

// запись свойства в объект
obj.some = 5;
console.log(obj.some)           // 5

// запись свойства в примитив
str.some = 5;                   // ошибка


// ================================================
// использование специальных классов

// new – всегда создает новый объект, экземпляр класса
// new ИмяФункцииКонстроуктора() – вернет объект
// ИмяФункции() – просто выполнение функции

let num;
num = new Number(0);			// не использовать вместе с new
typeof num;						// object

num = Number('0');				// явное преобразование типа
typeof num;						// number


