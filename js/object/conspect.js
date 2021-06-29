// Ключ — это всегда строка. Значением могут быть любые типы: примитивы, массивы, объекты, були, функции и т. п.
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

// Доступ к свойству объекта, для того чтобы получить или присвоить ему значение, может быть записан двумя способами:

// object.key — через точку.
// object["key"] — через квадратные скобки с именем ключа в кавычках.
console.log(hotel);
console.log(hotel.capacity);
console.log(hotel['name']);

hotel.stars = 4;
console.log(hotel.stars);

// Если при записи значения по ключу, такого ключа в объекте нет, он будет создан.
hotel['manager'] = 'Chuck Norris';
console.log(hotel);
console.log(hotel.manager);
console.log(hotel['name']);

// Удалить свойство объекта можно с помощью оператора delete.
delete hotel['stars'];
delete hotel.manager;
console.log(hotel); // {capacity: 100}

// Отсутствующее свойство, при обращении к нему по ключу, возвращает undefined
console.log(hotel.pool); // undefined

//  Вычисляемые свойства
const key = 'person';
const getKey = function () {
  return 'age';
};

// Computed properties
const object = {
  [key]: 'Mango',
  [getKey()]: 2,
};

console.log(object); // {person: 'Mango', age: 2}

const myKey = 'music';
const getMyKey = function () {
    return 'myAge';
}

const myObject = {
    [key]: 'music',
    [getMyKey()]: 15,
};
console.log(myObject);

// Методы объекта
// Так как методы - это обычные свойства,
// значение которых - это функция, их можно добавлять или удалять в любой момент.
hotel.greet = function () {
  console.log('Welcome!');
};
console.log(hotel);
hotel.greet(); // Welcome!

object.hello = function () {
    console.log('Hello');
}
console.log(object);

// Для доступа к текущему объекту в методе используется не имя объекта, а ключевое слово this - контекст. 
// Значением this является объект перед 'точкой', в контексте которого вызван метод.

//   showName() {
//     console.log(this.name);
//   ,
//   changeCapacity(value) {
//     this.capacity = value;
//   }


// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
//         console.log(hotel.capacity); // 200

// Цикл for...in
// Перебирает ключи объекта
// Можно удалять свойства во время перебора
// Нельзя использовать для перебора массивов

// Перебор ключей объекта hotel
for (const key in hotel) {
  console.log('Key: ', key);
}

/*
 * Key: name
 * Key: stars
 * Key: capacity
 */
const home = {
    number: 25,
    street: 'Galana',
    town: 'Kramatorsk',
    country: 'Ukraine',
};
console.log(home);
console.log(home.street);

for (const kei in home) {
    console.log(kei, home[kei]);
}

// Для того чтобы получить значение свойства с таким ключом во время итерации,
// используется синтаксис квадратных скобок, так как ключ всегда строка.

// Object.keys(obj) - вернет массив, с ключами объекта obj в виде строк.
// Object.values(obj) - вернет массив, со значениями свойств объекта obj .
//     Object.entries(obj) - вернет массив записей, каждым элементом которого
// будет еще один массив из 2 - х элементов: ключа и значения этого ключа из объекта obj.
const keys = Object.keys(home);
console.log(keys); // ["name", "stars", "capacity"]
// const values = Object.values(home);
// console.log(values); // ["Resort Hotel", 5, 100]
const entries = Object.entries(home);
console.log(entries);

// Допустим перед нами стоит задача посчитать общее количество продуктов в объекте формата имя - продукта: количество.Тогда подойдет
// метод Object.values() для того, чтобы получить массив всех значений и потом удобно их сложить.
const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};
console.log(goods);
const values = Object.values(goods); // [6, 3, 4, 7]

let total = 0;
// for (const value in goods) {
//     total += value;
//   console.log(total);  
// }
// 0apples
// conspect.js:144 0applesgrapes
// conspect.js:144 0applesgrapesbread
// conspect.js:144 0applesgrapesbreadcheese
// conspect.js:150 0applesgrapesbreadcheese
for (const value of values) {
total += value;
}

console.log(total); // 20

//