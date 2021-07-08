// const friends = [
//     { name: 'Oksana', online: false },
//     { name: 'Vadim', online: false },
//     { name: 'Olesya', online: true },
//     { name: 'Kate', online: false },
//     { name: 'Max', online: true },
//     { name: 'Inna', online: false },
//     { name: 'Vasya', online: false },
// ];
// console.table(friends);


//Ищем друга по имени
//создаем функцию
// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         if (friend.name === name) {
//             return 'Есть!!!';
//         }
// return 'Нет';
//     }
    
// };
// console.log(findFriendByName(friends, 'Mini'));

//***** */
 // Имена всех друзей в массив:

// const getAllName = function (allFriends) {
//     const names = [];
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name);
        
//     }
// return names;
// };
// console.log(getAllName(friends));

//**** */
// Найти имена всех онлайн друзей
// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];
//     for (const friend of allFriends) {
//         if (friend.online) {              //if (!friend.online)-не онлайн!!!
//             onlineFriends.push(friend);
//         }
//     };
// return onlineFriends;
// };
// console.log(getOnlineFriends(friends));

// //
// console.log();
// const x = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 100,
//     e: 45,
// }

// console.log(Object.keys(x).length);
// console.log();

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// console.table(apartment);
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.table(keys);

// for ( const value of keys){
//     console.log(apartment[value]);
    
// }


// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// propCount = Object.keys(object).length  
// //   for (const key in object) {
    
// //     if (object.hasOwnProperty(key)) {
// //       propCount += 1;
// //     }
// //   }

//   return propCount;
//   // Change code above this line
// }
//  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500}));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries);
//   // console.log(keys);
//   for (const value of keys) {
//     // console.log(value);
//     const salary = salaries[value];
//     console.log(salary);
//   totalSalary += salary;}
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// const namess = 'Radar';
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// let array = [];
// let total = 0;
//   for (const product of products) {
//     array = product;
//     console.log(array);
//     console.log(array.price);
//     if (array.name === namess) {
//       total += array.price;
     
//     }
//      console.log(total);
//     // Change code above this line
    
//   }

// console.log(getProductPrice("Grip"));

// Напиши функцию getAllPropValues(propName) которая принимает один параметр
// propName - имя(ключ) свойства.Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.Если в объектах нет свойства с таким именем, 
// функция должна вернуть пустой массив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let value = [];
//   for (let product of products){
//      value.push(product[propName]);
//     if (!product[propName]) {
//       return [];
//     }}
//    return value;
//   // Change code above this line
// }

// console.log(getAllPropValues('price'));
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//  let total = 0;
// for (let product of products)  {
//   if (product.name === productName) {
//   total = product.price * product.quantity; 
//   }
// }
// return total;

//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Radar"));//5300
// console.log(calculateTotalPrice("Grip"));//10800
// calculateTotalPrice("Blaster")//0
//********* */
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня(meanTemperature).Замени объявления переменных
// yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// // В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.
// // Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.
// // Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// // const highTemperatures = {
// //   yesterday: 28,
// //   today: 26,
// //   tomorrow: 33,
// // };
// // // Change code below this line

// // // const yesterday = highTemperatures.yesterday;
// // // const today = highTemperatures.today;
// // // const tomorrow = highTemperatures.tomorrow;
// // // const icon = highTemperatures.icon;
// // const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


// // // Change code above this line
// // const meanTemperature = (yesterday + today + tomorrow) / 3;


// // При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства.
// // Сначала пишем имя свойства из которого хотим получить знач
// // после чего ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.
// const firstBook = {
//   title: "Последнее королевство",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // Последнее королевство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480


// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon
// одной операцией деструктуризации свойств объекта highTemperatures.
// Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// // При переборе массива объектов циклом for...of получаются множественные обращения к свойствам объекта.
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// // Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// // Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..\
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами,
//   а также необязательными иконками.Замени объявления всех переменных одной операцией
// деструктуризации свойств объекта forecast.Задай значение по умолчанию для иконок,
//   переменных todayIcon и tomorrowIcon -
//   строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
// const {today : {low : lowToday, high : highToday, icon : todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow : {low : lowTomorrow, high : highTomorrow, icon : tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;


// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект
// температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией
// деструктуризации свойств объекта forecast.
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
// today : {low : todayLow, high : todayHigh}, 
//     tomorrow : {low : tomorrowLow, high : tomorrowHigh}
//   } = forecast;
  

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// Операция spread при передаче аргументов
// Синтаксис ... (spread) позволяет распылить коллекцию элементов(массив, строку или объект) в место, где ожидается набор отдельных значений.Конечно есть некоторые ограничения,
//   например нельзя распылить массив в объект и наоборот.

// Можно привести аналогию с ящиком яблок.
// Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений.
// Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

// Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию,
//   то есть делается копия каждого элемента.После распыления останется и ящик полный яблок, и
// копия каждого яблока на полу.

//   Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов(чисел),
//     то есть ожидает не массив значений, а произвольное количество аргументов.

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25
// То есть запись Math.max(...[14, -4, 25, 8, 11]),
//   после интерпретации превращается в Math.max(14, -4, 25, 8, 11) -
//     синтаксис ...возвращает распакованный массив, то есть распыляет его элементы как отдельные аргументы.


// В переменных firstGroupScores, secondGroupScores и thirdGroupScores
// хранятся результаты тестирования отдельных групп.Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// Операция spread при создании нового объекта
// Операция spread позволяет распылить свойства произвольного количества объектов в один новый.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// Порядок распыления имеет значение.Имена свойств объекта уникальные, поэтому
// свойства распыляемого объекта могут перезаписать значение уже существующего свойства,
//   если их имена совпадают.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
// Если бы яблоки в ящике имели наклейки с метками, то в одном ящике не может
// быть двух яблок с одинаковыми метками.
// Поэтому при пересыпании второго ящика, все яблоки, метки которых совпадут с теми что уже есть в
// новом, заменят те что уже есть.

// Во время распыления можно добавлять свойства в произвольное место.Главное помнить про
// уникальность имени свойства и о том, что его значение может быть перезаписано.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию
// которые хранятся в переменной defaultSettings.Во время создания теста, все или часть настроек
// можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и
// поверх них применить переопределённые настройки.
// Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {};
// const finalSettings = {...defaultSettings, ...overrideSettings};

// Задание
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой
// локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два,
//   category и priority, могут отсутствовать.Тогда, в новом объекте задачи,
//     в свойствах category и priority должны быть значения по умолчанию,
//   хранящиеся в одноимённых локальных переменных.


// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   let array = { category, priority, ...data, completed };
//   return array;

// //  console.log(ar); //category: "Homemade", priority: "Low", text: "Take out the trash"
// //   // Change code above this line
// }

// const first = { category: "Homemade", priority: "Low", text: "Take out the trash" };
// const second = { category: "Finance", text: "Take interest" };
// const third = { priority: "Low", text: "Choose shampoo" };

// console.log(makeTask({}));
// console.log(makeTask({first}));
// console.log(makeTask({second}));
// console.log(makeTask({ third }));
// console.log(makeTask({ text: "Buy bread" }));
//****** */
// Операция rest для сбора всех аргументов функции
// Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию.
// Синтаксически это близнец операции распыления, но отличить их просто -
//   распыление это когда ...находится в правой части операции присваивания,
//     а сбор это когда ...находится в её левой части.

// Вернёмся к аналогии с яблоками.Если на полу лежат яблоки и у нас есть пустой ящик,
//   то операция rest позволит «собрать» яблоки в ящик.При этом оригинальные яблоки
// останутся на полу, а в ящике будет копия каждого яблока.

// Одна из областей применения операции rest это создание функций которые могут принимать
// произвольное количество аргументов.

// // Как объявить параметры функции так,
// // чтобы можно было передать любое кол-во аргументов?
// function multiply() {
//   // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Если убрать весь «синтаксический шум» и посмотреть на аргументы и
// параметры функции, то аргументы находятся в правой части операции присваивания,
//   а параметры в левой, потому что значения аргументов присваиваются объявленным параметрам.
// Значит можно «собрать» все аргументы функции в один параметр используя операцию rest.

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Имя параметра может быть произвольным.Чаще всего его называют args, restArgs или otherArgs,
//   сокращённое от arguments.

// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
//   считала и возвращала их сумму.
// // Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const key of args)
//     total += key;
//   return total;
//   // Change code above this line
// }

// Тесты
// Вызов `add(15, 27)` возвращает 42
// Вызов `add(12, 4, 11, 48)` возвращает 75
// Вызов `add(32, 6, 13, 19, 8)` возвращает 78
// Вызов `add(74, 11, 62, 46, 12, 36)` возвращает 241


// Операция ... (rest) также позволяет собрать в массив только ту часть аргументов,
//   которая необходима, объявив параметры до «сбора».

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Все аргументы, для которых будут объявлены параметры, передадут им свои значения,
//   остальные аргументы будут помещены в массив.Операция rest собирает все оставшиеся
// аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.

// Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так,
//   чтобы она считала сумму только тех аргументов, которые больше чем заданное число.
// Это число должно быть первым параметром функции.
// Change code below this line

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber){
//     total += arg;
//   }}

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));



// Change code below this line
// function findMatches(arrays, ...array) {
//   console.log(arrays);
//   const matches = []; // Don't change this line
//   for (const key in arrays) {
//     // console.log(array);
//     // console.log(arrays[key]);
//      if (arrays.includes(array[key]))  {
//     matches.push(array[key]); }
//   } 
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// Методы объекта
// До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных,
//   например информация о книге и т.п.Объекты - хранилища обычно находятся в массиве таких же объектов,
//   который представляет коллекцию однотипных элементов.

// Объекты могут хранить не только данные, но и функции для работы с этими данными - методы.
// Если значение свойства это функция, такое свойство называется методом объекта.

// // ✅ Логиески и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["Последнее королевство", "Страж снов"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");
// Такие объекты можно назвать «моделями».Они связывают данные и методы для работы с этими данными.
//   Например, можно было объявить переменную books и две функции getBooks() и addBook(bookName),
//     но тогда это были бы три независимые сущности без явной синтаксической, и со слабой логической связями.

// // ❌ Слабосвязанные, независмые сущности
// const books = [];
// function getBooks() {}
// function addBook() {}
// Задание
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки
// по аналогии с getBooks() и addBook(bookName).
//**** */
// Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку "Deleting book <имя книги>",
//   где < имя книги > это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое.
// Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > это
// значения параметров oldName и newName соотвественно.
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//    return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };
// console.log(bookShelf.getBooks());//
// console.log(bookShelf.addBook("Haze"));

// Доступ к свойствам объекта в его методах
// Методы используются для работы со свойствами объекта, их изменения.
// Для доступа к объекту в методе используется не имя переменной, например bookShelf,
//   а ключевое слово this - контекст.Значением this будет объект перед «точкой»,
// то есть объект который вызвал этот метод, в нашем случае это ссылка на объект bookShelf.

// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ["Последнее королевство"], getBooks: f}
// Для того, чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.

// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// // bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]
// Будет логично задуматься - почему бы не использовать при обращении к свойствам имя объекта,
//   ведь мы явно не собираемся его менять.Дело в том, что имя объекта штука не надежная,
//   методы одного объекта можно копировать в другой(с другим именем),
//     а в будущем узнаем, что часто, при создании объекта мы заранее вовсе не знаем имени.
// Использование this гарантирует, что метод работает именно с тем объектом, который его вызвал.

// Задание
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги
// с oldName на newName в свойстве books.Используй indexOf() для того,
//   чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//  const bookIndex = this.books.indexOf(oldName);
//  this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// Задача. Лавка зелий «У старой жабы»
// Задание
// К нам обратилась владелица лавки зелий «У старой жабы» и
// заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий.
// Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// const atTheOldToad = {
//   // Change code below this line
//   potions : [],
//   // Change code above this line
// };

// Задача. Получаем все зелья
// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions () {return this.potions},
//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
// this.potions.push(potionName);
//     return this.potions; /// если return this.potions.push(potionName) вернет 4;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad. addPotion('potionNamesss'));

// Задание
// Дополни метод removePotion(potionName) так,
//   чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//  return this.potions
//     // Change code above this line
//   },
// };

// Задание
// Дополни метод updatePotionName(oldName, newName) так,
//   чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  const bookIndex = this.potions.indexOf(oldName);
//  this.potions.splice(bookIndex, 1, newName);
// return this.potions;
//     // Change code above this line
//   },
// };



// Задача. Расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем,
//   но и ценой, а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк,
//   а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//   updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием oldName на
// newName в массиве potions.


  // Change code below this line
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    const { potions } = this;
    for (const potion of potions){
    if (potion.name.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }}
this.potions.push(potionName);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (const potion of potions){

    if (potion.name === potionName) {
       const potionIndex = this.potions.indexOf(potion);
     this.potions.splice(potionIndex, 1);
      return  this.potions;
    }}

    
     return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (const potion of potions) {
      if (potion.name === oldName) {
        return potion.name = newName;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};



console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 270 }));

// confirm('aaa');
prompt('oooo');