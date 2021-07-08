// const fnA = function (message, callback) {
//     console.log(message);//I am a message fnA
//     console.log(callback);//undefined
//     callback(100);
// }

// const fnB = function (number) {
//     console.log('Вызов callback через fnB', number);
// };

// fnA('I am a message fnA', fnB)//консоль
/* I am a message fnA
callback-math.js:3 ƒ (number) {
    console.log('Вызов callback через fnB', number);
}
callback-math.js:8 Вызов callback через fnB 100 */

const doMath = function (a, b, callback) {
    const result = callback(a, b)
    console.log(result);
}
const addMath = function (x, y) {
    return x + y;
};

    function sub(x, y) {
        return x - y;
};

const multiply = (x, y) => {
    return x * y;
};
    console.log(addMath());
    return total = x + y;
// doMath(2, 3, addMath);//5
// doMath(41, 5, sub);//36
// doMath(2, 5, multiply);//10

const doPrice = (a, b, callback) => {
   const result = callback(a, b)
    console.log(result);  
}
