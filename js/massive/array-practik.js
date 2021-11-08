const heroes = ['Tom', 'Poly', 'Bekky', 'Sid', 'Mery', 'Gek'];
// console.table(heroes);//...Array(6)

// length
// console.log(heroes.length);//6

//String - rest
// console.log(...heroes);//Tom Poly Bekky Sid Mery Gek
// console.log('');

// get values of elements
// console.log('hero index 0', heroes[0]);//hero index 0 Tom
// console.log('hero index 1', heroes[1]);//hero index 1 Poly
// console.log('hero index 5', heroes[5]);//hero index 5 Gek

// console.log('');
//  for of
for (let hero of heroes) {
    // console.log('Hero of "Tom Soyer"', hero);//Hero of "Tom Soyer" Tom и т.д.
}
for (let i = 0; i < heroes.length; i += 1) {
    // console.log(`heroes-${i + 1}:`, heroes[i])
}

// console.log('');
//change array
heroes[5] = heroes[0];
// console.log(heroes);//["Tom", "Poly", "Bekky", "Sid", "Mery", "Tom"]

heroes[5] = 'Gek';
// console.log(heroes);//["Tom", "Poly", "Bekky", "Sid", "Mery", "Gek"]

// break & continue
for (let i = 0; i < heroes.length; i += 1) {
    if (heroes[i] === 'Bekky') {
        break;
    }
    // console.log(`heroes-${i + 1}:`, heroes[i])//heroes-1: Tom heroes-2: Poly
}

for (let i = 0; i < heroes.length; i += 1) {
    if (heroes[i] !== 'Bekky') {
        continue;
    }
    // console.log(heroes[i])//Bekky
}

// METHODS

// primitives by VALUE & arrays by REFERENCE(link)
let number = 5;
let newNumber = number;
// console.log(`число: ${number}, новое число: ${newNumber}, number === newNumber:`, number === newNumber);
number = 0;
// console.log(`число: ${number}, новое число: ${newNumber}, number === newNumber:`, number === newNumber);

//array
const animals = ['dog', 'cat', 'bird', 'mouse', 'chickens'];

const myAnimals = animals;
// console.log(`array: ${animals}, new array: ${myAnimals}, animals === myAnimals:`, animals === myAnimals);
myAnimals[0] = '';
myAnimals[1] = '';
myAnimals[2] = '';
myAnimals[3] = '';
myAnimals[4] = '';
// console.log(`array: ${animals}, new array: ${myAnimals}, animals === myAnimals:`, animals === myAnimals);

// slice(START-IDX, to-FINISH-IDX)
// Он позволяет извлекать элементы подмножества массива и
// добавлять их в новый массив.В большинстве случаев используется
// для создания копии части или целого исходного массива.
// Копирует элементы от begin, до, но не включая, end.
// *Оба аргумента(begin и end) не обязательны.
// *Если begin и end не указаны, копирование будет с начала массива,
//     с индекса 0, - то есть скопируется весь массив.
// *Если не указать параметр end, метод slice будет использовать длину массива (length) для параметра end.
// *Метод slice не изменяет исходный массив, а возвращает новый массив, содержащий копию элементов исходного.
// *Можно использовать отрицательные индексы, они отсчитываются с конца.
const students = [
    'Ann',
    'Kate',
    'Vanya',
    'Ira',
    'Sveta'
]
const allStudents = students.slice();
console.log(allStudents);//(5) ["Ann", "Kate", "Vanya", "Ira", "Sveta"]
const firstStudents = students.slice(0, 2);
console.log(firstStudents);//(2) ["Ann", "Kate"]
const secondStudents = students.slice(-2);
console.log(secondStudents);//(2) ["Ira", "Sveta"]
const withoutFirstStudent = students.slice(1)
console.log(withoutFirstStudent);//(4) ["Kate", "Vanya", "Ira", "Sveta"]
console.log('withoutFirstStudent === students', withoutFirstStudent === students);//false
console.log('allStudents === students', allStudents === students);//false


// split() & join()
// split(s) — позволяет превратить строку в массив, разбив ее по разделителю s.
// Это не метод массива, но рассматриваем мы его сейчас, так как раньше мы о массивах не знали.


const message = 'Hello My dear girl.'
// console.log(message.split(" "));//(4) ["Hello", "My", "dear", "girl."]
// console.log(message.split(''));//(19) ["H", "e", "l", "l", "o", " ", "M", "y", " ", "d", "e", "a", "r", " ", "g", "i", "r", "l", "."]
// const toLowermessage = message.toLowerCase().split('');
//(19) ["h", "e", "l", "l", "o", " ", "m", "y", " ", "d", "e", "a", "r", " ", "g", "i", "r", "l", "."]
// console.log(toLowermessage);
// console.log(message.split('e'));//(3) ["H", "llo My d", "ar girl."]

//     join(s) — делает в точности противоположное split.
// Он берет массив и склеивает его в строку, используя s как разделитель.

// const newMessage = toLowermessage.join('');
// console.log(newMessage);//hello my dear girl.
// console.log(newMessage.toUpperCase());//HELLO MY DEAR GIRL.

// // indexOf() & includes()
// console.log(students.indexOf('Ira'));
// console.table(students);
// console.log(students.includes('Ira'));

// // add new elements: unshift()    push()
// // -----------------
// // | 0, 1, 2, 3, n |
// // -----------------
// // remove element:   shift()       pop()
// const nums = [1, 2, 3, , 4, 5]
// console.table(nums)

// const shiftNums = nums.shift()
// console.log(shiftNums, nums)
// const poptNums = nums.pop()
// console.log(poptNums, nums)
// const unshiftNums = nums.unshift(9, 9)
// console.log(unshiftNums, nums)
// const pushNums = nums.push(5, 7)
// console.log(pushNums, nums)
// console.log(nums);
// console.log(pushNums);

// splice(START-IDX, HOW-MANY-ELs-to_CHANGE, el-1, ..., el-n)
// const cutStudents = students.splice(0, 4) // cut 2 elements
// console.log('cutStudents', cutStudents)//(4) ["Ann", "Kate", "Vanya", "Ira"]
// console.log('students', students)//(4) ["Ann", "Kate", "Vanya", "Ira"]

const replaceStudents = students.splice(2, 1, 'Bob')
console.log(replaceStudents);
console.log('students', students);

const addStudents = students.splice(4, 0, 'Ben', 'Jack', 'Dilan', 'Sonya', 'Kristina', 'Jhon') // add 2 elements
console.log('addStudents', addStudents)
console.log('students', students)

// concat()
const startArr = [1, 2, 3]
const middleArr = [4, 5, 6]
const endArr = [7, 8, 9]

// const fullArr = startArr.concat(middleArr, endArr)
const fullArr = middleArr.concat(endArr, startArr)

console.log('fullArr', fullArr)

