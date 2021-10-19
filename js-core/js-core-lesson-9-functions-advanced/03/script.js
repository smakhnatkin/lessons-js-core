'use strict';


/** вместо:
*/

let timerId = setTimeout(function tick() {
	alert('tick');
	timerId = setTimeout(tick, 2000); // (*)
}, 2000);


let timerId = setInterval(() => alert('tick'), 2000);






function fib(n) {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
  


console.log(14);

// 60 -> 1
// 60 -> 1
// 1000 -> 1

const timetId = setTimeout(() => {
	console.log(x);
}, 5000);

clearTimeout(timetId);

const x = 12;

console.log(15);

