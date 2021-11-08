// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   )
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach(firstAr => {
//     if (secondArray.includes(firstAr)) {
//       commonElements.push(firstAr);
//     }
//   })

//   return commonElements;
//   // Пиши код выше этой строки
// }

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// }
// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const even = [];
//   numbers.forEach(num => {
//     if (num % 2 === 0) {
//       num = num + value;
//     }
//     even.push(num);
//   });
//   return even;
  // Пиши код выше этой строки
// }

// Задание
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.
// Обязательно используй метод map().

// Тесты
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);
// // Задание
// // Используя метод map() сделай так, чтобы в переменной titles
// // получился массив названий книг(свойство title) из всех объектов массива books.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
  // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);


// Метод flatMap(callback) аналогичен методу map(), но применяется в случаях,
//   когда результат это
// многомерный массив который необходимо «разгладить».

// массив.flatMap((element, index, array) => {
//   // Тело коллбек-функции
// });
// В массиве students хранится список студентов со списком предметов, которые посещает студент,
//   в свойстве courses.Несколько студентов могут посещать один и тот же предмет.
// Необходимо составить список всех предметов, которые посещает эта группа студентов,
//   пока даже повторяющихся.

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];

// students.map((student) => student.courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// students.flatMap((student) => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// Он вызывает коллбек - функцию для каждого элемента исходного массива, а результат её работы
// записывает в новый массив.Отличие от map() в том, что новый массив «разглаживается» на глубину равную
// единице(одна вложенность).Этот разглаженный массив и есть результат работы flatMap().

// Задание
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг
//   (свойство genres) из массива книг books.
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap(book => book.genres);


// Задание
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей
//   (свойство name) из массива объектов в параметре users.

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
// Пиши код ниже этой строки
const getUserNames = users => {
  return users.map(user => user.name)  

  };
//   // Пиши код выше этой строки
getUserNames(users);
// Задание
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
//   а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

// Тесты
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(num => num % 2 ===0);
// const oddNumbers = numbers.filter(num => num % 2 !==0);

// Фильтрация уникальных элементов
// Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов.

// Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] }
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться.
// Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы,
//   то есть без повторений.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и
// получаем его индекс в оригинальном массиве всех курсов.В параметре index хранится индекс текущего
// элемента course при переборе массива методом filter.

// Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый
// раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

// # Массив всех курсов
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// Для элемента 'математика' под индексом 0:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 0.
// Они равны, значит это уникальный элемент.
// Для элемента 'математика' под индексом 3:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 3.
// Они не равны, значит это повторяющийся - не уникальный элемент.

// Задание
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг
//   (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров -
//     без повторений.

// Тесты
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter( (genre, index, array) => array.indexOf(genre) === index);


// Метод filter() и массив объектов
// При работе с массивом объектов выполняется фильтрация по значению какого - то свойства.
// В результате получается новый массив отфильтрованных объектов.

//   Например, есть массив студентов с баллами за тест.Необходимо отфильтровать лучших
//     (балл выше 80), худших(балл ниже 50) и средних студентов(балл от 50 до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон
// Задание
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating)
// больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем
//   (свойство author) которое совпадает со значением в переменной AUTHOR.
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);

// Задание
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив
// пользователей у которых цвет глаз(свойство eyeColor)
// совпадает со значением параметра color.

// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {

 return users.filter((user) => (user.eyeColor === color));
};            
// Пиши код выше этой строки

// Задание
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
//   возраст которых(свойство age) попадает в промежуток от minAge до maxAge.
// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => (user.age >= minAge && user.age <= maxAge));

// };
// // Пиши код выше этой строки

// адание
// Дополни функцию getUsersWithFriend(users, friendName) так,
//   чтобы она возвращала массив пользователей у которых есть друг с именем в
// параметре friendName.Массив друзей пользователя хранится в свойстве friends.

// Тесты

// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));

// };
// // Пиши код выше этой строки

// console.log(getUsersWithFriend);
// Задание
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).У нескольких пользователей могут быть одинаковые друзья,
//   сделай так чтобы возвращаемый массив не содержал повторений.
// const getFriends = (users) => {
//  const allfriends = users.flatMap(user => user.friends);
//   return allfriends.filter((friend, index, array) => array.indexOf(friend) === index);
// };

// Задание
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей,
//   значение свойства isActive которых true.

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//   return users.filter( user => user.isActive === true)
// };
// Пиши код выше этой строки
// Задание
// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой(свойство title)
// совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который(свойство author)
// совпадает со значением переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// Задание
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
//   почта которого(свойство email) совпадает со значением параметра email.
// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email);
// };
// Пиши код выше этой строки

// Задание
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);


// Задание
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны
//   (свойство isActive) и возвращала true или false.
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
// return users.every((user) => user.isActive === true)   
// };
// // Пиши код выше этой строки


// Задание
// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((el) => el % 2 === 0);;
// const anyElementInFirstIsOdd = firstArray.some((el) => el % 2 !== 0);;

// const anyElementInSecondIsEven = secondArray.some((el) => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((el) => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((el) => el % 2 === 0);;
// const anyElementInThirdIsOdd = thirdArray.some((el) => el % 2 !== 0);;


// Метод reduce()30
// Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит того.

// массив.reduce((previousValue, element, index, array) => {
//   // Тело коллбек-функции
// }, initialValue);
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает что угодно.
// Делает что угодно.
// Легче всего представить его работу на примере подсчёта суммы элементов массива.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32
// Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат. Значение которое вернёт коллбек-функция на текущей итерации, будет значением этого параметра на следующей.

// Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.

// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32
// То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». В повседневных задачах его применение сводится к работе с числами.

// Задание
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, element) => previousValue + element);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

// Метод reduce() и массив объектов
// При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, есть массив студентов с баллами за тест. Необходимо получить средний бал.

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// Задание
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// Тесты
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((total, player) => { 
return total + player.playtime / player.gamesPlayed;
}, 0);


// Задача. Общий баланс пользователей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// Задание
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

// Пиши код ниже этой строки
const calculateTotalBalance = users => {
  return  users.reduce((total, user) => {
  return total + user.balance}, 0);
};
// Пиши код выше этой строки

// Задание
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и
// возвращала общее количество друзей(свойство friends) всех пользователей из массива users.
// Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return  users.reduce((total, user) => total + user.friends.length, 0
// );}; 
// // Пиши код выше этой строки


// Метод sort()
// Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// Сортирует и изменяет исходный массив.
// Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// По умолчанию сортирует по возрастанию.
// Сравнение происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.
// // Массив чисел будет отсортирован по возврастанию
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// // Массив строк сортируется по алфавиту
// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// // При этом порядковый номер заглавных букв меньше чем у прописных
// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']
// Из-за того, что сортируется исходный массив, нарушается принцип чистоты функций и нельзя удобно сделать несколько производных коллекций на базе исходной. Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию. Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// Задание
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// Свой порядок сортировки чисел
// Для указания своего порядка сортировки методу sort(callback) нужно передать коллбек-функцию с двумя параметрами. Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.

// массив.sort((firstEl, secondEl) => {
//   // Тело коллбек-функции
// });
// firstEl - первый элемент для сравнения.
// secondEl - второй элемент для сравнения.
// Если вызов compareFunction(firstEl, secondEl) возвращает любое отрицательное значение, то есть firstEl меньше secondEl, сортировка поставит firstEl перед secondEl. Это сортировка по возрастанию.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// Если вызов compareFunction(firstEl, secondEl) возвращает любое положительное значение больше нуля, то есть secondEl больше firstEl, сортировка поставит secondEl перед firstEl. Это сортировка по убыванию.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
// Eсли вызов compareFunction(firstEl, secondEl) вернёт 0, сортировка оставит firstEl и secondEl неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. Но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.

// Задание
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);


// Свой порядок сортировки строк
// Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().

// firstString.localeCompare(secondString)
// Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).

// 'a'.localeCompare('b'); // -1
// 'b'.localeCompare('a'); // 1
// 'a'.localeCompare('a'); // 0
// 'b'.localeCompare('b'); // 0
// Возвращает отрицательное значение если firstString должна быть перед secondString.
// Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// Если строки одинаковы, возвращается ноль.
// Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']
// Задание
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке.Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// Сортировка объектов
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. Например, есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// Задание
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );


// Задача. Сортировка по балансу
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// Задание
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса(свойство balance).

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//   return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance); 
// };
// // Пиши код выше этой строки


// Задание
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length); 
// };
// // Пиши код выше этой строки

// Задание
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени(свойство name) в алфавитном порядке.
// Пиши код ниже этой строки
// const sortByName = users => {
//  return  [...users].sort((a, b) =>   a.name.localeCompare(b.name)
//  ); 
// };
// // Пиши код выше этой строки

// Цепочки методов (чейнинг, chaining)
// Есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.

// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//   { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//   { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
// ];
// Необходимо получить массив их имён отсортированный по возрастанию баллов за тест. Для этого мы отсортируем копию массива методом sort(), после чего методом map() составим массив значений свойства name из сортированного массива.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
// Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме финальной. Переменная sortedByAscendingScore лишняя и необходима только для хранения промежуточного результата.

// Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки. Каждый следующий метод будет выполняться на результате работы предыдущего.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
// Делаем копию исходного массива перед сортировкой.
// На копии вызываем метод sort().
// К результату работы метода sort() применяем метод map().
// Переменной names присваивается результат работы метода map().
// Получим сортированный по алфавиту массив уникальных посещаемых предметов.

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']
// На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
// К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
// На результате метода filter() вызываем sort().
// Переменной uniqueSortedCourses присваивается результат работы метода sort().
// Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций. Во-первых, перебирающие методы используются для сравнительно простых операций над коллекцией. Во-вторых, вызов каждого последующего метода, это дополнительный перебор массива, что при достаточном количестве, может сказаться на производительности.

// Задание
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]

.filter((book, index, array) => book.rating === MIN_BOOK_RATING)
.map((bookes) => bookes.name)
.sort((a, b) =>   a.author.localeCompare(b.author));
Или вот так
const names = [...books]
.filter(({rating}) => rating > MIN_BOOK_RATING)
.map((book) => book.author)
.sort((a, b) => a.localeCompare(b));


// Задание
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

const getNamesSortedByFriendCount = users => {
  return [...users]
  .sort((a,b) => a.friends.length - b.friends.length)
  .map(user => user.name);
};
// Задание
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// Пиши код ниже этой строки
const getSortedFriends = users => {
  return [...users]
  .flatMap(user => user.friends)
  .filter((user, index, array) => array.indexOf(user) === index)
  .sort((a, b) => a.localeCompare(b));
};
// Пиши код выше этой строки

// Задание
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// Тесты
const getTotalBalanceByGender = (users, gender) => {
   return [...users].filter((el)=>el.gender===gender).reduce((acc,el)=>acc+el.balance,0)
};