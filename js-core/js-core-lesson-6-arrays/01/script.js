'use strict';

const a = true;

let x = 10;
if (a === true) {
	x = 5;
}

let x;
if (a === true) {
	x = 5;
} else {
	x = 10;
}


const x1 = a === true ? 5 : 10;

const x2 = (a === true && 5) || 10;


// используется в React

// {isFetching && <Loader />}
// {!isFetching && <div></div>}

// {isFetching ? <Loader /> : <div></div>}


// ================================================
// массивы


// let arr = new Array();
arr = [];

let count = 1;

let students = ["Петрова", "Сидорова", "Иванова"];

alert( students[0] ); // Петрова
alert( students[1] ); // Сидорова
alert( students[2] ); // Иванова



const name1 = "Петрова";
const name2 = "Сидорова";



const x3 = {
	y: 10
}

// const key = "y";
// console.log(x3.y);
// console.log(x3[key]);



students[2] = 'Милютина'; 		// ["Петрова", "Сидорова", "Милютина"]

console.log(students); 			// ["Петрова", "Сидорова", "Милютина"]
alert(students) 				// 1,2


// Давайте создадим объект фильм
const movie = {
	id: 'esdff-445gf-123123-fdfgs', // uniq generated hash id
	title: 'Властелин колец',
	type: 'фантастика',
	year: 2000,
	duration: 120,
	director: 'Питер Джексон',
	actors: ['Первый', 'Второй']
};

// Давайте создадим массив фильмов
const movies = [{
	id: 'esdff-445gf-123123-fdfgs', // uniq generated hash id
	title: 'Властелин колец',
	type: 'фантастика',
	year: 2000,
	duration: 120,
	director: 'Питер Джексон',
	actors: ['Первый', 'Второй']
}, {
	id: 'sdgsfd-23424-dfgdfgdfg-123123', // uniq generated hash id
	title: 'Властелин колец 3',
	type: 'фантастика',
	year: 2004,
	duration: 125,
	director: 'Питер Джексон',
	actors: ['Первый', 'Второй']
}, {
	id: 'fhjfh-sdfsf-123cfgdf-123sdfg', // uniq generated hash id
	title: 'Властелин колец 2',
	type: 'фантастика',
	year: 2002,
	duration: 122,
	director: 'Питер Джексон',
	actors: ['Первый', 'Второй']
}];

// Методы pop/push, shift/unshift

movies.push({
	id: 'fhjfh-sdfsf-123cfgdf-123sdfg', // uniq generated hash id
	title: 'Джокер',
	type: 'Драма',
	year: 2020,
	duration: 90,
	director: 'Питер Джексон',
	actors: ['Первый', 'Второй']
}); // length 


// function sum(a, b) {
// 	alert(a + b)
// 	// return undefined; 
// }



// const lastMovie = movies.pop(); // {}

// movies.push();			// в конце
// movies.pop();

// movies.shift();			// в начале
// movies.unshift();

// movies.reverse()		// переворачивает


// ================================================
// циклы (обход массива)

// ================================================
// фильтрация 

// ================================================
// сортировка


console.log(movies.length); // 4 


const countMovies = 10;
// if (countMovies === 9) {
// 	alert('Фильм 9');
// }

let i = 0;
while (i < movies.length) {
	console.log(movies[i].title);
	i++; // i = i + 1
}

for (let i = 0; i < movies.length; i++) {
	console.log(movies[i].title);
}

for (let movie of movies) {
	console.log(movie.title);
}

// не используем
// for (let key in movies) {
// 	console.log(movies[key].title);
// }

// for (let movie of movies) {
// 	console.log(movie.title);
// }

// const callback = (movie) => {
// 	console.log(movie.title);
// };

// movies.forEach(callback);  // вызвать


// Название: Властелин колец, год выпуска: 2004
const rings = []; // 3

movies.forEach(({ title, year, ...props }) => {  // 4
	if (title.startsWith('Властелин колец')) {
		rings.push({ 
			title,
			year,
			...props,
		})
	}
});  

rings.forEach(({ title, year }) => {
	console.log(`Название: ${title}, год выпуска: ${year}`);
});

movies.map(({ year }) => {
	return year;
});  


// 	console.log(`Название: ${title}, год выпуска: ${year}`);


// ...
// callback(item) // вызов


// const callback = (item) => {
// 	return true;
// } 
// // true | false?
// movies.filter(callback) // ?

const numbers = [12, null, 13, null, null];	// [12, 13]

numbers.filter(item => item !== null);
numbers.sort((current, next) => current > next);







// Давайте создадим объект фильм
const movie = {
	id: 'esdff-445gf-123123-fdfgs', // uniq generated hash id
	title: 'Властелин колец',
	type: 'фантастика',
	year: 2000,
	duration: 120,
	director: 'Питер Джексон',
	actors: ['Первый', 'Второй']
};









// Давайте создадим массив фильмов
const movies = [{
	id: 'esdff-445gf-123123-fdfgs', // uniq generated hash id
	title: 'Властелин колец',
	type: 'фантастика',
	year: 2000,
	duration: 120,
	director: 'Питер Джексон',
	actors: ['Первый', 'Второй']
}, {
	id: 'sdgsfd-23424-dfgdfgdfg-123123', // uniq generated hash id
	title: 'Властелин колец 3',
	type: 'фантастика',
	year: 2004,
	duration: 125,
	director: 'Питер Джексон',
	actors: ['Первый', 'Второй']
}, {
	id: 'fhjfh-sdfsf-123cfgdf-123sdfg', // uniq generated hash id
	title: 'Властелин колец 2',
	type: 'фантастика',
	year: 2002,
	duration: 122,
	director: 'Питер Джексон',
	actors: ['sdfgsfd-123123-sdfsdf-1231', 'sdfgsfd-123123-sdfsdf-1231']
}];


const actors = [{
	id: 'sdfgsfd-123123-sdfsdf-1231',
	name: '',
	movies: ['sdfsfsdfs-sdfsdfs-123123-1231', 'sdfsfsdfs-sdfsdfs-123123-1231']
}, {
	id: 'sdfgsfd-123123-sdfsdf-1231',
	name: '',
	movies: ['sdfsfsdfs-sdfsdfs-123123-1231', 'sdfsfsdfs-sdfsdfs-123123-1231']
}]

const actors = {
	'sdfgsfd-123123-sdfsdf-1231': {
		id: 'sdfgsfd-123123-sdfsdf-1231',
		name: '',
		movies: ['sdfsfsdfs-sdfsdfs-123123-1231', 'sdfsfsdfs-sdfsdfs-123123-1231']
	}, 
	'sdfgsfd-123123-sdfsdf-1231': {
		id: 'sdfgsfd-123123-sdfsdf-1231',
		name: '',
		movies: ['sdfsfsdfs-sdfsdfs-123123-1231', 'sdfsfsdfs-sdfsdfs-123123-1231']
	}
}



// user: {
// 	name: 'Сергей',
// 	surname: 'Махнаткин'
// },

const userProfile = {
	id: 'asfsdf-213sfg-sgsg-123123',
	// name: 'Сергей Махнаткин',

	user: {
		name: 'Сергей',
		surname: 'Махнаткин'
	},

	subscribeType: 'golden premium',
	nickname: 'makhnatkin',
	subscribeEndDate: '2021-10-07',
};

const nickname = 'name' 	
console.log(userProfile[nickname]); // 'Сергей Махнаткин',

console.log(userProfile.nickname); // 'makhnatkin'
console.log(userProfile['nickname']); // 'makhnatkin'

// нашОбъект['имяКлюча']	=> 	значениеЭтогоКлюча	





// ['id', 'name', 'subscribeType', 'nickname', 'subscribeEndDate']
const keys = Object.keys(userProfile); 



// ['имяКлюча', 'имяКлюча', 'имяКлюча', 'имяКлюча', 'имяКлюча']
// нашОбъект[['имяКлюча', 'имяКлюча', 'имяКлюча', 'имяКлюча', 'имяКлюча'][0]]	=> 	значениеЭтогоКлюча	




let str = '';
for (let i = 0; i < keys.length; i++) {

	const isFirst = i === 0; // true | false;

	const space = isFirst ? '' : ', ';
	const key = keys[i];
	const value = userProfile[key];

	const newStr = space + value;

	str += newStr;

}
// asfsdf-213sfg-sgsg-123123, Сергей Махнаткин, golden premium, makhnatkin, 2021-10-07





// 1 шаг  ============
// '',
// i = 0, 0 < 5 ? true
// str = 0

// 2 шаг  ============
// '0',
// i = 1, 1 < 5 ? true
// str = 01

// 3 шаг  ============
// '01',
// i = 2, 2 < 5 ? true
// str = 012

// 4 шаг  ============
// '012',
// i = 3, 3 < 5 ? true
// str = 0123

// 5 шаг  ============
// '0123',
// i = 4, 4 < 5 ? true
// str = 01234

// 5 шаг  ============
// '01234',
// i = 5, 5 < 5 ? false
// console.log(str)	// 01234



// asfsdf-213sfg-sgsg-123123, Сергей Махнаткин, golden premium, makhnatkin, 2021-10-07
console.log(str);


// console.log(keys);

// const values = Object.values(userProfile); 
// console.log(values);


// userProfile.user.name


const users = [{
	id: 'asfsdf-213sfg-sgsg-123123',
	name: 'Сергей Махнаткин',
	subscribeType: 'golden premium',
	nickname: 'makhnatkin',
	subscribeEndDate: '2021-10-07',
}, {
	id: '213sfg-sgsg-asfsdf-123123',
	name: 'Сергей Махнаткин',
	subscribeType: 'golden premium',
	nickname: 'makhnatkin',
	subscribeEndDate: '2021-10-07',
}, {
	id: 'asfsdf-213sfg-sgsg-123123',
	name: 'Сергей Махнаткин',
	subscribeType: 'golden premium',
	nickname: 'makhnatkin',
	subscribeEndDate: '2021-10-07',
}];





// ================ плохо
const list = [{
	id: '',
	title: '',
	users: [{}, {}]
}, {
	id: '',
	title: '',
	users: [{}]
}, {
	id: '',
	title: '',
	users: [{}, {}, {}]
}]


// ================ хорошо
const list = [{
	id: '',
	title: '',
	users: ['id-1', 'id-2']
}, {
	id: '',
	title: '',
	users: ['id-1', 'id-2']
}, {
	id: '',
	title: '',
	users: ['id-1', 'id-2']
}]

// hashMap
const users = {
	'id-1': {
		id: 'id-1',
		name: ''
	}, 
	'id-2': {
		id: 'id-1',
		name: ''
	},
	'id-2': {
		id: 'id-1',
		name: ''
	}
}

const id = list[1].users[1] // 'id-2'
console.log(users[id].name)







// циклы?

// for (key in obj) {}
// while
// do while 

// циклы, которые используем
// for (let i = 0; i < arr.length; i++) {}
// for (item of array) {}

// методы массива
// const x = {};
// .forEach((item, index) => {
// 		if () {
// 			x[index] = item
// 		}
// })
// .map 			
