// array.prototype.forEach()
// Единственный из функциональных методов, который ничего не
// возвращает, а просто перебирает коллекцию.
// Используется как замена цикла for.

// array.forEach(callback[currentValue, index, array], thisArray)

// Перебирает
// Может изменять
// Не возвращает

const numbers = [5, 10, 15, 22, 25]
console.log(numbers);
numbers.forEach(function (num, index, numbers) {
    // console.log('number:', num);
    // num = 0;
    // console.log('number:', num);
    numbers[2] = 5;
    // console.log('number:', num);
})
// console.log(numbers);