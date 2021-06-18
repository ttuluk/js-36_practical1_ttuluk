let value;
console.log(value, 'not a Number', isNaN(value));
value = NaN;
console.log(value, 'not a Number', isNaN(value));
;
value = 'string';
console.log(value, 'not a Number', isNaN(value));
;

//Не являются Не Числом
console.log('');
console.log('Не являются не Числом');
console.log('');
value = 1;
console.log(value, 'not a Number', isNaN(value));
;
value = Infinity;
console.log(value, 'not a Number', isNaN(value));
;
value = 0;
console.log(value, 'not a Number', isNaN(value));
;
value = " ";
console.log(value, 'пустая строка not a Number', isNaN(value));
;
value = null;
console.log(value, ' not a Number', isNaN(value));
;
value = true;
console.log(value, ' not a Number', isNaN(value));
;
value = false;
console.log(value, 'not a Number', isNaN(value));
;
console.log('');



