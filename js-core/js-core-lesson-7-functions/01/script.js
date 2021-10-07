



let x; 			// декларация переменной

function F() {	// декларация функции
	f1();
	f2();
	f3();
	//	return undefined;
} 

console.log(F()); // undefined;

// hosting (всплытие переменных или поднятие)
function sum(a, b) {
	return a + b;
}
const result = sum(2, 3);

console.log(result)	// 5


const console = {
	log: showParam => {
		alert(showParam)
	}
}

console.log(result)


// =============================
// hosting
// 1) function declaration					(до ES2015)
// 2) var x = 3; // var x // undefined		(до ES2015)
// 3) код выполняется построчно				// у нас нет проблем


// 2 ===========================
// const sum = function () {};
// sum() // undefined;

const sum = function (a, b) {
	return a + b;
};

let x1 = 10;
let x2 = 15;

x2 += x1; 	// x2 = x2 + x1

sum(10, x2) // undefined;
sum(12, 15)	// 
sum(30, 23)	//  


// 3 ==========================
let sum = function sum (a, b) {
	sum();
	return a + b;
};

const div = sum;
sum = 10;

div();


// 4 ==========================
const sum = (a, b) => a + b;



const ff = () => {};

console.log(ff);	














console.log(x12);	// 1, '1', {}, [], () => {}


console.log( x35() );	// вызываем () => {}







// 1 =========
(function () {
	const x = 16;
	console.log(x);	// 16
})()

// 2 ==========
const x = 16
console.log(x);	// 16

function V() {
	console.log(x)
} 
