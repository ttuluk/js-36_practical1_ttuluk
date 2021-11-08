/*
 * Посчитать общую сумму покупок в корзине
 */

const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;
// for (let cart of carts) {

//     total += cart;
// };
// console.log(total);

/*
 * Посчитать сумму первых 3х покупок в корзине
 */
const arrays = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// total = 0;
// for (let i = 0; i <= 3; i++) {

//     total += arrays[i];
// };
// console.log(total);
/*
 * Найти максимальную сумму покупок в корзине
 */
// let max;
// for (let i = 0; i < arrays.length; i++) {

//     if (arrays[i] > arrays[i + 1]) {
//         // console.log(arrays[i]);
//         max = arrays[i];
//    }

// };
// console.log(max);



/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */
// const arrays = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// total = 0;
// for (let i = 0; i < arrays.length; i++) {
//     // if (arrays[i] % 2 === 0) {
//     //     total += arrays[i];
//     // }
//     if (arrays[i] % 2 !== 0) {
//         continue;
//     }
//     console.log(`${arrays[i]} - четное`);
//     total += arrays[i];
// };
// console.log(total);

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
// let message = '';
// for (let login of logins) {
//     if (login === loginToFind) {
//         message =`Пользователь ${loginToFind} найден.`;
//         break;
//     }
//     message = `Пользователь ${loginToFind} не найден.`;

// }
// console.log(message);

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'qWeRTzxCv';
const letters = string.split('');
let invertedString = '';
// console.log(letters);
for (const letter of letters) {
    //     if (letter !== letter.toLowerCase()) {
    //         invertedString += letter.toLowerCase();
    //     }
    //     invertedString += letter.toUpperCase();
    // }
    // console.log(invertedString);
    // // const let = invertedString.join('');
    // // console.log(let);
    const isEqual = letter === letter.toLowerCase();
    invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase()
};
// console.log(invertedString);

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

// const toNormTitle = title.toLowerCase();
// console.log(toNormTitle);
// const toArrayTitle = toNormTitle.split(' ');
// console.log(toArrayTitle);
// const slug = toArrayTitle.join('-');
// console.log(slug);
const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */
const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

//  cards.splice(index, 1);
// console.log(cards);
/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);
/*
 * Обновление (по индексу)
 */

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'Обновленная карточка-4');

console.table(cards);
 
