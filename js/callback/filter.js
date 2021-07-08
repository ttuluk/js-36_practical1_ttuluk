const filter = function (array, callback) {
  const  filterArray = []
    for (let ar of array) {
    console.log(ar);
        console.log(callback(ar));
        const pased = callback(ar);
        if (pased === true) {
            filterArray.push(ar);
        }
    }
  
    return filterArray;
}
// console.log(filter([1, 2, 3, 4, 5]));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
    return value > 3;
}
const callback2 = function (value) {
    return value < 5;
}
console.log(filter([1, 2, 3, 4, 5, 6, 7], callback1));
console.log(filter([1, 2, 3, 4, 5, 6, 7], callback2));