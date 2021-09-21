'use strict';

// var x = 1; 

// let y = 0;
// const z = 3;

// alert('Значение переменной y: ' + y);


// let myVariableExample = 0;
// const myConstVariableExample = 0;
// const myNewConstVariableExample = myConstVariableExample - 2;

// обзор
// const num = 1;
// const str = 'Вася';
// const isSurname = true;
// const student = {
//     name: 'Влад',
//     surname: 'Цой'
// };

// const studentsNames = ['Влад', 'Дмитрий'];



// const getStudentsNames = function() {
//     return ['Влад', 'Дмитрий']
// }

// // как создавать?
// let a = 0;
// let b = 1;


// let some;




// let name = prompt('Ваше имя?', '');
// let isTeacher = false;

// if (name === 'Сергей') {
//     isTeacher = true;
// }

// alert('Учитель в зале? ' + isTeacher); 


// let result = sum(1, 2); // 3



// тернарный оператор
// const name = prompt('Ваше имя?', '');
// const isTeacher = (name === 'Сергей') ? true : false;

// alert('Учитель в зале? ' + isTeacher); 


// const animal = {
//     className: 'другое',
//     type: 'парнокопытное'
// };

// const terminator = {
//     className: 'жидкий',
//     type: '3000'
// };


// alert(animal.className);
// alert(terminator.className);

// let { className, type } = animal; 
// className = animal.className; 

// alert(className);

// let x = 1;
// let { className, type } = {
//     className: '',
//     type: ''
// }; 

// className = animal.className; 

// alert(className);


// const x2 = 1; // неизменяемая переменная
// // либо переменаная, в которую можно записать 1 раз

// const DEFAULT_COLOR = 'red';



// let some = 1


// // функциональная область видимости
// function F() {
//     let some = 1;
// }

// // ES2015 блочная область видимости
// let x = 0;

// while (some < 1) {
//     let x = 0;
// }


// глобальная область видимости
// (function () {

//     let x = 3;

// })()


/*
// 2 -----------------------------
function F1() {

    // шаг 1: создается x1 и кладется в нее 1;
    let x1 = 1; 

    // шаг 2: создается функция F2
    // 2 -------------------------
    function F2() {  
        let x2 = 1;
        // return undefined;
    }
    // ---------------------------

    // шаг 3: 
    // let x1 = 2; // ошибка, такая переменная уже создана
    x1 = 2;

    // шаг 4: ошибка, так как x2 не определена
    alert(x2);
}
// -------------------------------


F2(); 
F1(); // вызов функции F1







    // let x1 = 1; 
    // let x1 = 2;

    // alert(x1);


*/





function F1() {

    let x1; // = undefined 
    let x2; // = undefined

    if (x1 === 1) { 

        x2 = x2 + 1; // 3

        if (x1 >= 1) {
            x2 = x2 - x1;
        } 


    }


    alert(x2);
}

F1();