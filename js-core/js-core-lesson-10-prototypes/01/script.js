'use strict';


// Прототипное наследование

// const f = () => {
//     console.log(this)
// }

// f(); // window - внешний this

const f = function () {
    console.log(this)
}

f(); // undefined




// создание объекта
// const obj = new F();    // где F - функция конструктор

const num1 = Number(1);      // результат исполнения функции
const num2 = new Number(1);  // результат исполнения функции-конструктора


// const sum = (a, b) => a + b;
// const result = new sum(2, 3);   // {5} // { sum: "2, 3" }

// без new
const sum = function (a, b) {
    return a + b;
};

// вызов с new
const sum = function (a, b) {
    this = {}
    // --- return a + b;
    return this
};



const result = new sum(2, 3);   // {5} // { sum: "2, 3" }

// new - это функция-констркутор 
// к ней налагаются некоторые требования
// 1) не стрелка
// 2) она содержит this
// 3) она всегда возвращает this как новый объект




// если вызвать с new
const Animal = function(maxAge, type) {
    // this = {}
    this.maxAge = maxAge;
    this.type = type;
    // return this;
} 

// this - новые объект
const eagle = new Animal(20, 'bird');

console.log(eagle.type)





// функциональное программирование
// мама отправляет сына купить молоко
// и сын весело бежит в магазин за молоком

const send = (sender, buyer, good, callback) => {

}
send(mum, son, milk, run);


// объектно ориенитированное программирование
// мама отправляет сына купить молоко

const mum = {
    name: '',
    send: (buyer, good) => {}
}

const son = {
    name: '',
    run: (shop) => {}
}

mum.send(sun, milk)







// const horse = {
//     tailLength: 30,
//     color: 'black',
//     run: () => {
//         console.log('я лошадь')
//     },
// };

// const pegas = {
//     __proto__: horse,
//     wingsLength: 100,
//     fly: () => {},
// };

// const smallPegas = {
//     __proto__: pegas,
//     height: 10
// };

// smallPegas.run()







// // const pegas = horse + wings + fly()
// const pegas1 = Object.assign({}, horse, { wingsLength: 100, fly: () => {} }); // 1
// const pegasPart = { wingsLength: 100, fly: () => {} }
// const pegas2 = { ...horse, ...pegasPart }; // 10
// const pegas3 = { ...horse, ...pegasPart  }; // 10
// const pegas4 = { ...horse, ...pegasPart  }; // 10
// // ...
// const pegas10000 = { ...horse, ...pegasPart  }; // 10





const horse = {
    tailLength: 30,
    color: 'black',
    run: () => {
        console.log('я лошадь')
    },
};

const Pegas = function () {
    this.__proto__ = horse;
    this.fly = () => {};
    this.wingsLength = 100;
}

const pegas = new Pegas();