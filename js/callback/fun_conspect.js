// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

//Репета
// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//callback() // вызывает функцию, и только здесь исполняется функция fnB
// }
// // fnA('Mama-mia!!!', /* 'Hello, I am a callback' */ fnB);//Ошибка!!!Cannot access 'fnB' before initialization

// const fnB = function (callback) {
//     console.log('I am a callback B!');
// };
// fnA('Mama-mia!!!', /* 'Hello, I am a callback' */ fnB);//Mama-mia!!!fun_conspect.js:15 ƒ (callback) {console.log('I am a callback B!');}

// 2. Абстрагирование повторения
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

function showThis() {
    console.log(this)
};
showThis()