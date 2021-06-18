// TO STRING
let myString = 'Friday to hollyday';
//index and length
console.log(myString.length);
console.log(myString[0], myString[myString.length - 1] );
console.log(myString);
console.log(myString.includes('to'));
console.log(myString.indexOf('to')); 
console.log(typeof `object`, typeof  'object');
console.log('');

// ЧИСЛО К СТРОКЕ
console.log('ЧИСЛО К СТРОКЕ');
let value = 0;

//1й способ
console.log('1й способ');
let toString = String(value);
console.log(`${value}, 'через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
console.log('2й способ');
//2й способ
toString = value + '';
console.log(`${value}, 'через конкатенацию String(value + ''): `, toString);
console.log(`тип данных ${value}, 'через конкатенацию String(): `, typeof toString);
console.log('');

// ЧИСЛО К СТРОКЕ
console.log('ЧИСЛО К СТРОКЕ');
value = 1;

//1й способ
toString = String(value);
console.log(`${value}, 'через конструктор String(): `, toString);
console.log(`тип данных ${value}, 'через конструктор String(): `, typeof toString);

//2й способ
toString = value + '';
console.log(`${value}, 'через конкатенацию String(): `, toString);
console.log(`тип данных ${value}, 'через конкатенацию String(): `, typeof toString);
console.log('');

// ЗНАЧЕНИЕ БЕСКОНЕЧНОСТИ К СТРОКЕ
console.log('ЗНАЧЕНИЕ БЕСКОНЕЧНОСТИ К СТРОКЕ');
value = Infinity;

//1й способ
toString = String(value);
console.log(`${value}, 'через конструктор String(): `, toString);
console.log(`тип данных ${value}, 'через конструктор String(): `, typeof toString);

//2й способ
toString = value + '';
console.log(`${value}, 'через конкатенацию String(): `, toString);
console.log(`тип данных ${value}, 'через конкатенацию String(): `, typeof toString);
console.log('');


// NOT A NUMBER К СТРОКЕ
console.log('NOT A NUMBER К СТРОКЕ');
value = NaN;

//1й способ
toString = String(value);
console.log(`${value}, 'через конструктор String(): `, toString);
console.log(`тип данных ${value}, 'через конструктор String(): `, typeof toString);

//2й способ
toString = value + '';
console.log(`${value}, 'через конкатенацию String(): `, toString);
console.log(`тип данных ${value}, 'через конкатенацию String(): `, typeof toString);
console.log('');

// ---------

//BOOLEAN(логическое значение) TO STRING
console.log('BOOLEAN(логическое значение) TO STRING');
//true
console.log('');
value = true;

//1й способ
toString = String(value);
console.log(`${value}, 'через конструктор String(): `, toString);
console.log(`тип данных ${value}, 'через конструктор String(): `, typeof toString);

//2й способ
toString = value + '';
console.log(`${value}, 'через конкатенацию String(): `, toString);
console.log(`тип данных ${value}, 'через конкатенацию String(): `, typeof toString);
console.log('');
//false
value = false;

//1й способ
toString = String(value);
console.log(`${value}, 'через конструктор String(): `, toString);
console.log(`тип данных ${value}, 'через конструктор String(): `, typeof toString);

//2й способ
toString = value + '';
console.log(`${value}, 'через конкатенацию String(): `, toString);
console.log(`тип данных ${value}, 'через конкатенацию String(): `, typeof toString);
console.log('');
// ---------

//UNDEFINED TO STRING
console.log('UNDEFINED TO STRING');
console.log('');
value = undefined;

//1й способ
toString = String(value);
console.log(`${value}, 'через конструктор String(): `, toString);
console.log(`тип данных ${value}, 'через конструктор String(): `, typeof toString);

//2й способ
toString = value + '';
console.log(`${value}, 'через конкатенацию String(): `, toString);
console.log(`тип данных ${value}, 'через конкатенацию String(): `, typeof toString);
console.log('');
// ---------

//NULL TO STRING
console.log('NULL TO STRING');
console.log('');
value = null;

//1й способ
toString = String(value);
console.log(`${value}, 'через конструктор String(): `, toString);
console.log(`тип данных ${value}, 'через конструктор String(): `, typeof toString);

//2й способ
toString = value + '';
console.log(`${value}, 'через конкатенацию String(): `, toString);
console.log(`тип данных ${value}, 'через конкатенацию String(): `, typeof toString);

