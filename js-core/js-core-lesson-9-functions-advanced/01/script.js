'use strict';


// function F1() {		// 1 – декларативный
// 	let x = 1;
// 	console.log(x);	// 1
// 	return x;
// }
// (function F1() {		// 2 – выражение
// 	return x;
// })


// function F1() {		// 1 – декларативный
// 	console.log(x);	// ошибка: x не объявлен
// 	let x = 1;
// 	return x;
// }

F1()

function F1() {		
	console.log(x);	// undefined
	var x = 1;
	return x;		// 1
}

// hosting переменных (всплытие переменных)
// 1. объявления функций деклараций
// 2. объявления var
// 3. выполняет код построчно

// Чем пользоваться?
// () => {} – для функций
// const в 99% – декларативный подход
// let в 1%

////////////////////////

// const f = 2;

const f = () => {};
console.log( f );		// () => {}
console.log( f() );		// undefined

// () – вызов
// у вызова всегда есть результат вызова (return)
// если не задан, то undefined


// ----------------
const f2 = () => {
	return 10;
};
console.log( f2 );			// () => { return 10; };
console.log( f2() );		// 10

// ----------------
const f3 = () => 10;

// примеры идентичны
// синтаксический сахар
// { return что-то.... =======> что-то...

console.log( f3 );			// () => { return 10; }; тоже самое
console.log( f3() );		// 10




// пример из презентации
// const makeSomeFunc = () => {
// 	return;
// };

// console.log( makeSomeFunc() );	// undefined


// const makeSomeFunc = () => {
// 	return someFunc;		// код падает с ошибкой переменная не определена
// };

// const f = makeSomeFunc();
	
// console.log( f );	// ?



// const makeSomeFunc = () => {
// 	const someFunc = 1;
// 	return someFunc;		
// };

// const f = makeSomeFunc();
	
// console.log( f );	// 1


// const makeSomeFunc = () => {
// 	const f = () => {};
// 	const someFunc = () => {};	// 2

// 	console.log(f !== someFunc); // true
// 	return someFunc;		
// };

// const f = makeSomeFunc();
	
// console.log( f );	// () => {}; в строке 2


// const x = () => {};
// console.log(x); // () => {}

// // ==================================
// const makeSomeFunc = () => {
// 	const someFunc = () => {};	// 2

// 	return someFunc;		
// };

// const f = makeSomeFunc();
	
// console.log( f );	// () => {}; в строке 2




// // ==================================
// const makeSomeFunc = () => {
// 	const someFunc = () => {
// 		return 'что-то';
// 	};	// 2

// 	return someFunc;		
// };

// const f = makeSomeFunc();
	
// console.log( f );	// () => {}; в строке 2




// // ==================================
// const makeSomeFunc = () => {
// 	const someFunc = () => {
// 		return 10;
// 	};

// 	return someFunc;		
// };

// const f = makeSomeFunc();
	
// console.log( f );	// () => { return 10; }; в строке 2
// console.log( f() );	// 10;




// // ==================================
// const makeSomeFunc = () => {
// 	const someFunc = () => {
// 		return 10;
// 	};

// 	return someFunc(); // 10
// };

// const f = makeSomeFunc();
	
// console.log( f );	// 10;



// // ==================================
// const makeSomeFunc = () => {
// 	const someFunc = () => {
// 		return 10;
// 	};

// 	return someFunc(); // 10
// };

// const f = makeSomeFunc();
	
// console.log( f );	// 10;


// // ==================================
// const makeSomeFunc = () => {	// 1
// 	const someFunc = () => { // 2
// 		let x = 10;
// 		return x;
// 	};

// 	return someFunc;
// };

// const f = makeSomeFunc();		// содержимое 2
	
// console.log( f );				// содержимое 2
// console.log( f() );				// 10



// // ==================================
// const makeSomeFunc = () => {	// 1
// 	let x = 0;
	
// 	const someFunc = () => {	// 2
// 		x = 10;
// 		return x;
// 	};

// 	return someFunc;
// };

// const f = makeSomeFunc();		
	
// console.log( f );				// 
// console.log( f() );				// 10



// ==================================
const makeSomeFunc = () => {	
	let x = 0;						// создали x, записали 0
	
	const someFunc = () => {		// создали someFunc, записали в нее функцию
		x = x + 10;
		return x;
	};
	x = x + 10;						// x = 0 + 10 //	10

	return someFunc;				// вернули функцию
};

const f = makeSomeFunc();		
	
console.log( f() );					// 20



// =============================
function makeArmy() {
	let shooters = [];
  
	let i = 0;
	while (i < 10) {
		(function(j) {
			let shooter = function() { // функция shooter
				alert( j ); // должна выводить порядковый номер
			};
			shooters.push(shooter);
			i++;
		})(i);
	}
  
	return shooters;
  }

  let army = makeArmy();

  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


  
 


  // замыкание


// ==================================
const makeSomeFunc = () => {	// 1
	let x = 0;
	
	const someFunc = () => {	// 2
		x = 10;
		return x;
	};

	return someFunc;
};

const f = makeSomeFunc();		// отработала	

	
console.log( f );				// 
console.log( f() );				// 10




const print = (a, b, c) => {

}

const printName = () => {

}

const myApi = {
	print: (str)	=> {
		alert('Привет, я ' + str);
		return undefined;
	}
}

myApi.print('Сергей');

// ======================
const sum = (a, b) => {
	return a + b;
}

sum(2021, 15);
sum(2021, 20);
sum(2021, 32);
sum(2021, 56);

const sum2021 = a => {
	return 2021 + a; 
}

sum2021(15);
sum2021(20);
sum2021(32);
sum2021(56);

const createSome = (func, param) => {
	return (...args) => {
		func(param, ...args);
	};
}

const sum2021 = createSome(sum, 2021);

// HOC - high order componet 



// this ================================

let obj = {
	name: 'Вася',
	getName: function() {
		return this.name;
	}
}
const x = obj;
const y = obj;
obj = null;

x.name = 'Сережа'
y.name = 'Марина'

x.getName();
y.getName();
