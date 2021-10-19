'use strict';

// deep equal (рекурсивный вызов isEqual)

function isEqual(object1, object2) {
	const props1 = Object.getOwnPropertyNames(object1);
	const props2 = Object.getOwnPropertyNames(object2);
  
	if (props1.length !== props2.length) {
	  return false;
	}
  
	for (let i = 0; i < props1.length; i += 1) {
	  const prop = props1[i];
	  const firstIsObject = typeof(object1[prop]) === 'object';
	  const secondIsObject = typeof(object2[prop]) === 'object';
  
	  const bothAreObjects = firstIsObject && secondIsObject;
  
	  if ((!bothAreObjects && (object1[prop] !== object2[prop]))
	  || (bothAreObjects && !isEqual(object1[prop], object2[prop]))) {
		return false;
	  }
	}
  
	return true;
  }
  

