// FUNCTION EXPRESSION

// const name = function(parametres){
// what need to do
// return result
// }

const myName = function (name) {//(name-параметр)
    
    console.log(name);
}
myName('Tatyana');//('Tatyana'-аргумент)
myName('Dan');
const letResult = function (a = 0, b = 0) {
    // console.log(a, b);
    // let result = a + b;
    // return `result: ${result}`;
    return a + b;
}
// let log = letResult();
// console.log(log);
// log = letResult(1, 2);
// console.log(log);
//  console.log(letResult(5, 6))

// FUNCTION DECLARATION as a variable var are hoisting (поднятие в начало области)

// function name(parametres){
// what need to do
// return result
// }//в ней можно выводить значение до объявления функции
let isModulOpen = false;
console.log(tooggleModul(isModulOpen));
function tooggleModul(value) {
    value = !value;
    return value;
}

// ARROW FUNCTION
// const name = (parametres) => {
// what need to do
// return result
// }
// ||


// const name = (parametres) => result

const getPow = (num, pow) => num ** pow;
// const getPow = (num, pow) => num ** pow

let result = getPow(2, 3)
console.log(result)

// result = getPow(5, 3)
// console.log(result);



