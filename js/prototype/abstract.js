const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage();
console.log(getWage());//NaN

//ООП
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();
console.log(employee.getWage());//30200

//КОнструкторы
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// // В результате вызова
// const hotel = new Hotel('Resort Hotel', 5, 100);
// // Получаем такой объект
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}
// const Hotel = function (name, stars, capacity) {
//   // this = {};

//   // в this пишем свойства и методы
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;

//   // return this;
// };

// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const motel = new Hotel('Sunlight Motel', 4, 300);
// console.log(motel);
// // Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}

// Добавим метод в создаваемый объект.Например, пусть Hotel
// имеет методы для приветствия гостя и добавления и удаления количества гостей в поле guestCount.
// Проверки на вместительность пропустим.

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// hotel.removeGuests(50);

// Управляем магазином
// Время практики.Представьте, что у нас есть магазин и два менеджера, по продаже товаров.
// Необходимо написать логику для организации их работы.Для каждого менеджера создаётся отдельный объект.
// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// Это было просто и всё работает хорошо, но мы буквально захардкодили менеджеров заранее.
// Представьте что будет, когда наш магазин вырастет и пополнится парой сотен менеджеров,
//     для каждого из которых будет необходимо создать объект динамически во время выполнения программы.
// Очевидно, что создавать объекты подобным способом — не самая лучшая затея.К счастью, мы знаем о конструкторах.
// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// Прототип
// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true
// Если мы добавим объекту dog свойство eats и присвоим ему false, то результат будет следующим.

// const animal = { eats: true };
// const dog = { barks: true, eats: false };

// dog.__proto__ = animal;

// console.log(dog.barks); // true
// console.log(dog.eats); // false, свойство взято из dog

// Object.create()
// Для того чтобы правильно задать прототип объекта, можно использовать метод Object.create(obj), 
// передав параметром obj ссылку на объект, который мы хотим сделать прототипом для создаваемого объекта.

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats); // true

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function() {
// return this.price;
// };
// Car.prototype.changePrice = function(newPrice) {
// return this.price = newPrice;
// };

// С помощью Function Declaration напиши функцию - конструктор Storage,
//   которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров,
//   который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
//   addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта,
//     который вызывает этот метод.
//   removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта,
//     который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
//   в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.
// function Storage(items) {
// this.items = items;
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {

//   return this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//  for (let i = 0; i < this.items.length; i += 1) {

//       if (item === this.items[i]) {
//         this.items.splice(i, 1);
//       }
//     }
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
//  Задание
// С помощью Function Declaration напиши функцию - конструктор StringBuilder,
//   которая принимает один параметр baseValue -
//   произвольную строку, которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
//   padEnd(str) - получает парметр str(строку) и добавляет её в конец значения свойства value объекта,
//     который вызывает этот метод.
//   padStart(str) - получает парметр str(строку) и добавляет её в начало значения свойства value объекта,
//     который вызывает этот метод.
//   padBoth(str) - получает парметр str(строку) и добавляет её в начало и в конец значения свойства value
// объекта, который вызывает этот метод.
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// };
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
//  this.value += `${str}`;
// };
// StringBuilder.prototype.padStart = function (str) {
//  this.value = `${str}` + this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
//    this.value = `${str}` + this.value + `${str}`;
// };


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
// class Car {
// brand;
// model;
// price;
//   constructor({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// }
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//   return this.price;
//   };
//   changePrice(newPrice) {
//       this.price = newPrice;
//   };
// }
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//     getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// class Storage {
//   #items;

// constructor (items) {
//   this.#items = items;
// }

// getItems () {
//   return this.#items;
// };

// addItem (newItem) {
//   this.#items.push(newItem);
// };

// removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// // Задание
// // Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.

// // Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты.
// // Пожалуйста ничего там не меняй.

// class StringBuilder {
// #value;

// constructor (value) {
//   this.#value = value;
// }
// getValue () {
//   return this.#value;
// };

// padEnd (str) {
//   this.#value += str;
// };

// padStart (str) {
//   this.#value = str + this.#value;
// };

// padBoth (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// Задание
// Выполни рефакторинг класса Car.Сделай свойства model и price приватными, также как #brand.
// Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand,
//   model и price для взаимодействия с приватными свойствами.
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }
// Задание
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice.Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или
// равно, то перезаписывает цену автомобиля.
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice <= Car.MAX_PRICE)
//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// Кроме публичных и приватных свойств будущего экземпляра,
//   в классе можно объявить его собственные свойства, доступные только классу,
//   но не его экземплярам - статические свойства(static).
// Они полезны для хранения информации относящейся к самому классу.

// Добавим классу пользователя приватное свойство type - его тип,
//   определяющий набор прав, например администратор, редактор, просто пользователь и т п.
// Возможные типы пользователей будем хранить как статическое свойство TYPES - объект со свойствами.

// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.
// class User {
//   // Объявление и инициализация статического свойства
//   static TYPES = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
//   #type;

//   constructor({ email, type }) {
//     this.#email = email;
//     this.#type = type;
//   }

//   get type() {
//     return this.#type;
//   }

//   set type(newType) {
//     if (User.TYPES[newType] === undefined) {
//       console.log('Ошибка! Такого типа пользователя не существет');
//       return;
//     }

//     this.#type = newType;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   type: User.TYPES.ADMIN,
// });

// console.log(mango.TYPES); // undefined
// console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

// console.log(mango.type); // admin
// mango.type = User.TYPES.EDITOR;
// console.log(mango.type); // editor
//  Обращение к приватному статическому свойству вне тела класса вызовет ошибку.
// В классе можно объявить не только методы будущего экземпляра, 
// но и методы доступные только классу - статические методы, 
// которые могут быть как публичные, так и приватные.
// Синтаксис объявления аналогичен статическим свойствам, за исключением того, что значением будет метод.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(
//   User.isEmailTaken('poly@mail.com')
// ); // false

// console.log(
//   User.isEmailTaken('mango@mail.com')
// ); // true
// Особенность статических методов в том, что во время их вызова ключевое слово 
// this ссылается на сам класс.Это значит, что статический метод может получить доступ к статическим
// свойствам класса, но не к свойствам экземпляра.Логично, потому что статические методы вызывает сам класс,
//   не его экземпляры.

// Задание
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля.
// Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов,
//   чтобы показать как будет использоваться метод checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
// static checkPrice(price) {
// if (price >= Car.#MAX_PRICE) {
// return 'Внимание! Цена превышает допустимую.'
// }
//  return 'Всё хорошо, цена в порядке.'
// }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// Наследование классов
// Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует свойства и методы другого класса (родителя). В выражении class Child extends Parent дочерний класс Child наследует (расширяет) от родительского класса Parent.

// Это означает, что мы можем объявить базовый класс, который хранит общие характеристики и методы для группы производных классов, которые наследуют свойства и методы родителя, но также добавляют свои уникальные.

//     Например, в приложении есть пользователи разных типов - администратор, писатель статей,
//   контент менеджер и т.п.У каждого типа пользователя есть набор общих характеристик,
//     например почта и пароль,
//       но также есть и уникальные.

// Сделав независимые классы для каждого типа пользователя мы получим дублирование общих свойств и методов,
//   и при необходимости изменить, например, название свойства, придётся проходить по всем классам,
//     это неудобно и трудозатратно.

// Вместо этого можно сделать общий класс User, который будет хранить набор общих свойств и методов,
//   после чего сделать классы для каждого типа пользователя, которые наследуют этот набор от класса User.
// При необходимости изменить что - то общее, достаточно будет поменять только код класса User.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   // Тело класса ContentWriter
// }

// const writer = new ContentWriter('mango@mail.com');
// console.log(writer); // { email: 'mango@mail.com' }
// console.log(writer.email); // 'mango@mail.com'
// Класс ContentWriter наследует от класса User его конструктор, геттер и сеттер email, а также одноимённое публичное свойство.
// Важно помнить, что приватные свойства и методы класса - родителя не наследуются классом - ребёнком.

// Задание
// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel(уровень доступа),
//   значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
// static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };
// }
// Задание
// Добавь классу Admin метод constructor, который принимает один параметр -
//   объект настроек с двумя свойствами email и accessLevel.
// Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове
// конструктора.

// Чтобы показать как будет использоваться класс Admin,
//   мы добавили инициализацию экземпляра под объявлением класса.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;
//  constructor({ email, accessLevel }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.accessLevel = accessLevel;
//   }
  
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

blacklistedEmails = [];
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
blacklist(email) {
 return this.blacklistedEmails.push(email);
}
isBlacklisted(email) {
return this.blacklistedEmails.includes(email);
}