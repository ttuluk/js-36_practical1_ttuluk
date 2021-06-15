// TO BOOLEAN

//  любое строчное значение
let value = 'hello';

//1й способ
let toBoolean = Boolean(value);
console.log(`${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через !! Boolean(): `, typeof toBoolean);

//  любое строчное число
value = '123';

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через !! Boolean(): `, typeof toBoolean);

//  пустая строка 
value = '';

//1й способ
toBoolean = Boolean(value);
console.log(`пустая строка${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных пустая строка${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`пустая строка${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных пустая строка${value}, 'через !! Boolean(): `, typeof toBoolean);

//  строка с пробелом
value = ' ';

//1й способ
toBoolean = Boolean(value);
console.log(`строка с пробелом ${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных строка с пробелом${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`строка с пробелом${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных строка с пробелом${value}, 'через !! Boolean(): `, typeof toBoolean);

// ЧИСЛО к Boolean
value = 0;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через !! Boolean(): `, typeof toBoolean);

value = 1;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через !! Boolean(): `, typeof toBoolean);

// NaN к Boolean
value = NaN;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через !! Boolean(): `, typeof toBoolean);

// UNDEFINED к Boolean
value =undefined;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через !! Boolean(): `, typeof toBoolean);

// Null к Boolean
value = null;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, 'через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через конструктор Boolean(): `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, 'через !! Boolean(): `, toBoolean);
console.log(`тип данных ${value}, 'через !! Boolean(): `, typeof toBoolean);

