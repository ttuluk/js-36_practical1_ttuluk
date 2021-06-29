/*
 * Приведение к булю на примере Boolean(value)
 */
// const booleanVar = 0;
// console.log(typeof booleanVar);
// let booleanVar2 = Boolean(booleanVar);
// console.log(typeof booleanVar2, booleanVar2);

let varFirst = 0;
let varSecond = 0;
let varThird = 0;
console.log(varFirst, varSecond, varThird);
console.log(typeof varFirst, typeof varSecond, typeof varThird);
console.log('Логические операторы :');

let and = varFirst && varSecond && varThird;
let or = varFirst || varSecond || varThird;
let not = varFirst != varSecond != varThird;
console.log('and:', and, 'or:', or, 'not=:', not);

console.log('');
console.log('Приведение к Bolean');
let varBooleanFirst = Boolean(varFirst);
let varBooleanSecond = Boolean(varSecond);
let varBooleanThird = Boolean(varThird);
console.log(varBooleanFirst, varBooleanSecond, varBooleanThird);
console.log(typeof varBooleanFirst, typeof varBooleanSecond, typeof varBooleanThird);
console.log('Логические операторы :');

and = varBooleanFirst && varBooleanSecond && varBooleanThird;
or = varBooleanFirst || varBooleanSecond || varBooleanThird;
not = varBooleanFirst != varBooleanSecond != varBooleanThird;
console.log('and:', and, 'or:', or, 'not=:', not);


/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(5 && 4 && 7 && 'mango');

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(false || 5 || null || 0);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */
