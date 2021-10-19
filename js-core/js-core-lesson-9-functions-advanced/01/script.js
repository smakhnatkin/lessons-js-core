'use strict';

// 1 Global контекст ---------------------------------

console.log(this);






// В браузерах, объект window также является объектом global:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"



// 2 Function контекст -------------------------------

function f1(){
	return this;
}

// В браузере:
f1() === window; // window - глобальный объект в браузере

// В Node:
f1() === global; // global - глобальный объект в Node


function f2(){
	"use strict"; // см. strict mode
	return this;
}

f2() === undefined; // true


























// 3 Метод bind ---------------------------------------
function f() {
	return this.a;
  }
  
var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty



// 4 Стрелочные функции -------------------------------
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true



// 5 В методе объекта ---------------------------------
var o = {
	prop: 37,
	f: function() {
		return this.prop;
	}
};

console.log(o.f()); // logs 37



// 6 this в цепочке object's prototype ----------------
var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f());



// 7 this с геттерами/сеттерами -----------------------
function modulus(){
	return Math.sqrt(this.re * this.re + this.im * this.im);
  }
  
  var o = {
	re: 1,
	im: -1,
	get phase(){
	  return Math.atan2(this.im, this.re);
	}
  };
  
  Object.defineProperty(o, 'modulus', {
	  get: modulus, enumerable:true, configurable:true});
  
  console.log(o.phase, o.modulus); // logs -0.78 1.4142


  
  // 8 В конструкторе ---------------------------------
  function C() {
	this.a = 37;
  }
  
  var o = new C();
  console.log(o.a); // logs 37
  
  
  function C2() {
	this.a = 37;
	return {a: 38};
  }
  
  o = new C2();
  console.log(o.a); // logs 38



  // 9 call и apply -----------------------------------
  function add(c, d) {
	return this.a + this.b + c + d;
  }
  
  var o = {a: 1, b: 3};
  
  // Первый параметр - это объект, который следует использовать как
  // 'this', последующие параметры передаются
  // как аргументы при вызове функции
  add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
  
  // Первый параметр - объект, который следует использовать как
  // 'this', второй параметр - массив,
  // элементы которого используются как аргументы при вызове функции
  add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34



  // 10 Как обработчик событий DOM --------------------
  // Когда вызывается как обработчик, связанный элемент становится синим
function bluify(e) {
	// Всегда true
	console.log(this === e.currentTarget);
	// true, когда currentTarget и target один объект
	console.log(this === e.target);
	this.style.backgroundColor = '#A5D9F3';
  }
  
  // Получить список каждого элемента в документе
  var elements = document.getElementsByTagName('*');
  
  // Добавить bluify как обработчика кликов, чтобы при
  // нажатии на элемент он становился синим
  for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', bluify, false);
  }



  // 11 В инлайновом обработчике событий ---------------
<button onclick="alert(this.tagName.toLowerCase());">
	Показать this
</button>







const func = function() {
	'use strict';
	return this;
};

const func3 = function() {
	return () => {
		'use strict';
		return this;
	};
	
}

const func4 = func3();



// const person = {
// 	name: 'Иван',
// 	getName: function() {
// 		return this.name;
// 	}
// }


// console.log(person.getName()); // Иван


// const person = {
// 	name: 'Иван',
// 	getName: () => {
// 		return this;
// 	}
// }


// console.log(person.getName()); // undefined


// 'use strict'
// const person = {
// 	name: 'Иван',				// приватный
// 	getName: function() {		// геттер
// 		return this.name;
// 	},
// 	setName: function(name) {	// сеттер
// 		this.name = name
// 	}
// }


// // console.log(person.getName()); // Иван

// const { getName } = person;

// console.log(getName());




// person.setName('Василий');
// person.getName() // Василий




const person = {
	name: 'Иван',				// приватный
	getName: function() {		// геттер
		return this.name;
	},
	setName: function(name) {	// сеттер
		this.name = name
	}
}

const { setName, getName } = person;


const student = {
	name: ''
};

// student.setName

const setStudentName = setName.bind(student);
setStudentName('Надежда')

console.log(student.name);






const doublePow = Math.pow.bind({}, 2);

doublePow(3) 

// call/apply

setName.call(student, 'Эля');
