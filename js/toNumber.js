// TO NUMBER

// СТРОКА К ЧИСЛУ
//любое строчное число к числу
let value = 'HELLO';

//1й способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number() `, toNumber);
console.log(`тип данных ${value}, через конструктор`, typeof toNumber);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);

//строчные числа к числу
value = '123';

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number() `, toNumber);
console.log(`тип данных ${value}, через конструктор`, typeof toNumber);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);

//пустая строка числа к числу
value = '';

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number() `, toNumber);
console.log(`тип данных ${value}, через конструктор`, typeof toNumber);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);

//не пустая строка числа к числу
value = ' ';

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number() `, toNumber);
console.log(`тип данных ${value}, через конструктор`, typeof toNumber);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);


// BOOLEAN К ЧИСЛУ
//true
value = true;

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number() `, toNumber);
console.log(`тип данных ${value}, через конструктор`, typeof toNumber);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);

//false
value = false;

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number() `, toNumber);
console.log(`тип данных ${value}, через конструктор`, typeof toNumber);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);


// UNDEFINE К ЧИСЛУ
value = undefined;

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number() `, toNumber);
console.log(`тип данных ${value}, через конструктор`, typeof toNumber);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);

// NULL К ЧИСЛУ
value = null;

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number() `, toNumber);
console.log(`тип данных ${value}, через конструктор`, typeof toNumber);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);
