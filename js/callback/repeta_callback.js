/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)(в примере это fnВ)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка» (в примере это fnA)
 */

// 1я запись вызова callback
// const fnA = function (message, callback) { 
//     console.log(message);
// }
//     const fnB = function () {
//         console.log('I am callback');
//     }

// fnA('I am a message fnA', fnB())
// выводит в консоль:
/*  repeta_callback.js:5 I am callback
    repeta_callback.js:2 I am a message fnA */

    /****************************** */
    // ****** Ошибка если вложить одну функцию в другую и вызвать первую//
// const fnC = function (message, callback) {
//     console.log(message);

//     const fnError = function () {
//         console.log('I am callback');
//     }
// }
// fnC('I am a message fnA', fnError());//выводит в консоль:
/* repeta_callback.js:20 Uncaught ReferenceError: fnError is not defined
    at repeta_callback.js:20 */

// fnC('hello');// hello
// fnC('Функция fnA', fnA());// в консоль:
/* undefined - так как нет аргументов в функции
repeta_callback.js:14 Функция fnA */

// fnC('Функция fnA', fnA('fnA in fnC', fnB()));// в консоль:
/* I am callback
repeta_callback.js:2 I in fnC
repeta_callback.js:14 Функция fnA */

// fnC('fnB in fnC', fnB());
/* I am callback
repeta_callback.js:14 fnB in fnC */

/****************************** */
// 2я запись вызова callback
// const fnA = function (message, callback) {
//     console.log(message);//I am a message fnA
//     console.log(callback);//undefined
//     callback();
// }

// const fnB = function () {
//     console.log('I am callback');//I am callback
// };

// fnA('I am a message fnA', fnB);// если записать fnB() то выдаст ошибку, так как в fnA уже вызвана функция callback();
// консоль:
/* I am a message fnA
repeta_callback.js:40 ƒ () {
    console.log('I am callback');//I am callback
}
repeta_callback.js:45 I am callback */

