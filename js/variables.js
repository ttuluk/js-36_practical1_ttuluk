console.log('variables');

console.log(student); //undefine

var student = 'Tatyana Tuluk';
console.log(student);

var count;//объявление переменной без инициализации
console.log(count); //undefined

count = 1;
console.log(count);
count = 2;
console.log(count);

//console.log(number);//ReferenceError: Cannot access 'number' before initialization
let number = 30;
console.log(number);

let age;
console.log(age);//undefined
age = 18;
console.log(age);
age = 22;
console.log(age);

//console.log(userName); //Uncaught ReferenceError
//const user; //Uncaught SyntaxError: Missing initializer in const declaration

const userName = 'ttuluk'
console.log(userName);

//userName = '';//Uncaught TypeError
