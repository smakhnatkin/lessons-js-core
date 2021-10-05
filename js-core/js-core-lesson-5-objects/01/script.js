'use strict';

// ================================================
// методы объекта
let obj = {					// объект
	name: 'Что-то',			// свойством
	getSome: function() {},	// метод
	obj2: {
		x: {
			y: 1
		}
	}
}

obl.getSome()				// вызов метода


alert(obj.obj2.x.y)

// =========
let user = {
	name: 'Лилия',
	age: 22
};

user.name = 'Петр'
console.log(user);

// {
// 	name: 'Петр',
// 	age: 22
// }


// ========
const user = {
	name: 'Лилия',
	age: 22
};

user.name = 'Петр';

const user2 = user;

user2.name = 'Жанна';
console.log(user.name); // Жанна


let someObj = {};
someObj = {
	name: 'Иван'
}

// =========

// let student1 = {};
// let student2 = {};

// if (student1 === student2) {
// 	alert('Один и тот же студент');
// } else {
// 	alelt('Разные студенты');  // <----
// }


// let student1 = {};
// let student2 = student1;

// if (student1 === student2) {
// 	alert('Один и тот же студент'); // <----
// } else {
// 	alelt('Разные студенты');  
// }

// let student1 = {};			// 1
// let student2 = student1;	// 1
// student1 = {};				// 2

// if (student1 === student2) {
// 	alert('Один и тот же студент'); 
// } else {
// 	alelt('Разные студенты');  // <----
// }



// let student1 = {
// 	name: 'Иван'
// };			
// let student2 = student1;	
// student1 = {
// 	name: 'Иван'
// };				

// if (student1.name === student2.name) {  // 'Иван' === 'Иван'
// 	alert('Один и тот же студент'); // <----
// } else {
// 	alelt('Разные студенты');  
// }


// let student1 = {
// 	x: {
// 		name: 'Иван'
// 	}
// };			
// let student2 = student1;	
// student1 = {
// 	x: {
// 		name: 'Иван'
// 	}
// };				

// if (student1.x === student2.x) {  
// 	alert('Один и тот же студент'); 
// } else {
// 	alelt('Разные студенты');  // <----
// }

let student1 = {
	x: {
		name: 'Иван'
	}
};			
let student2 = student1;	
student1 = {
	x: student2.x
};				

if (student1.x === student2.x) {  
	alert('Один и тот же студент'); // <----
} else {
	alelt('Разные студенты');  
}


// 1) сравнивают ссылки
// student2 === student1
// 2) поверхностое сравнение shallowEqual
// 3) глубокое сравнение
// сравнивать полную вложенность

// lodash – библиотека удобных функций 


// shallowEqual

const getUserName = () => 'Вася';
const getUserSurname = () => 'Семенов';

// const sendUser = ({ name }) => {
// 	console.log(name);
// };

// const sendUser = (user) => {
// 	const { name } = user;
// 	console.log(name);
// };

const sendUser = (user) => {
	const name = user.name;
	console.log(name);
};

// const userName = getUserName();
// const userSurname = getUserSurname();

// const user = {
// 	name: userName,
// 	surname: userSurname,
// };

// sendUser(user);

// // ---------------
// const name = getUserName();
// const surname = getUserSurname();

// const user = {
// 	name: name,
// 	surname: surname,
// };

// sendUser(user);


// // ---------------
// const name = getUserName();
// const surname = getUserSurname();

// const user = {
// 	name,
// 	surname,
// };

// sendUser(user.name); // 'Вася'


// ---------------
const name = getUserName();
const surname = getUserSurname();

const user = {
	name,
	surname,
};

sendUser(user); // 'Вася'



// const user = {
// 	name,
// 	surname,
// };

// const { name, surname } = user;

// установочная встреча
const some = {
	list: [{
		name: 'Иван'
	}, {
		name: 'Света'
	}, {
		name: 'Лиза'
	}],

	count: 15,

}

const styles = {
	list: '',
	item: ''
}




const aaa = {
	sss: '111'
}

// const aaa = 'sdfsfsdf';

const sss = aaa.sss; // '111'
const { sss } = aaa; // '111'
 
// https://learn.javascript.ru/destructuring-assignment


const mm = {
	dd: {
		ff: '222' 
	}
}

// const ff = mm.dd.ff;
const { dd: { ff } } = mm;

console.log(ff); // '222'


const handleChange = (event) => {
	const value = event.target.value;
	console.log(value);
}


const handleChange = ({ target: { value }}) => {
	// ...
	console.log(value);
}


const arr = ['1', '2', '3'];


console.log(a, b, c) // '1', '2', '3'

const a = arr[0];
const b = arr[1];
const c = arr[2];

// React Hook useState
const [a, b, c] = arr;



// деструкторизация еще одна
// ...

const animal = {
	type: {
		name: ''
	}
};

const { type: { name } } = animal;

const dog = {
	type: {
		name
	}
}

// lodash 
// clone(a, b)


// 1) копирование ссылки
// const student2 = student1
// 2) поверхностое копирование Object.assign()
// 3) глубокое копирование
// lodash


const animalMaybeClone = Object.assign({}, animal);

const event = {
	time: '10:01',
	state: 'И'
}
const event1 = {
	time: '10:02',
	state: event.state + 'в'
}
const event3 = {
	time: '10:03',
	state: event1.state + 'а'
}

const x = {}
const x1 = Object.assign({}, x)
const x2 = Object.assign({}, x1)

// создание нового объекта из старого
const event4 = { 
	...event,
	time: '10:05',
}


const fructs = ['яблоко', 'ананас'];
const fructs2 = [...fructs];

fructs[0]

event4.time;
event4['time'] // динамика


const getKey = () => 'time';
const key = getKey();

event[key]
// ...



// x x x x
// x x x x 
// x x x x 


// O(N2) - плохо
// O(N) – норм

// O(log(N)) - 1/3 O(N)
// O(1)

movies['33'] // O(1)



const fructs = [{
	id: '15',
	name: 'Сергей'
}, {
	id: '16',
	name: 'Сергей'
}]


const fructs = {
	'15': {
		id: '15',
		name: 'Сергей'
	}, 
	'16': {
		id: '16',
		name: 'Сергей'
	}}

// 	fructs['15'].name