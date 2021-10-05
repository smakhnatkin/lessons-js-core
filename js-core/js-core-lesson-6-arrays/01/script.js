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
