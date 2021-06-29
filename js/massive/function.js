// const number = [1, 5, 6];
//  // Change code below this line
//     let total = 0;
//     for (let numbers of number) {
//     total += numbers;
//     }
//     console.log(total);


// const array1 = [1, 2, 3, 4]

// const array2 = [2, 4];

//   let arr = [];

//   for (let i = 0; i <= array1[i].length; i += 1){
//       if (array2.includes(array1)) {
//         console.log(arr[i]); 
//     arr += arr.push(array1[i]);
//     arr.push(array2[i]);
      
//     }
       

//   }

 // Change code above this line

// function getEvenNumbers(start, end) {
//    // Change code below this line
// let array = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             array.push(i);
//         }
//     }
//     return array;

//     // Change code above this line
//   }

// console.log(getEvenNumbers(2, 5));
//Function-Expration
// const sum = function (a, b) {
//     let c = 0;
//     c += a + b;
//     return c;
// }
// console.log(sum(5, 5));

//тип обьявления функции Function Declaration
//Функция для модального окна
// let isModalOpen = true;

// function toggleModal(value) {
//     value = !value;
//     return value;  
// }

// let result = toggleModal(isModalOpen);
// console.log(result);
// isModalOpen = false;
// result = toggleModal(isModalOpen);
// console.log(result);

//Стрелочная фукция
// const getPow = (num, pow) => num ** pow;
// console.log(getPow(2, 2));
// console.log(getPow(2, 3));
// console.log(getPow(2, 4));
//функция с разным типом данных в массиве
// let resul;
// const getResultByTest = function () {
//     console.log(arguments);
//     let total = 0;

//     for (let ar of arguments) {

//         if (Number(ar) !== NaN) {
    
// total += Number(ar);
// console.log(ar);
//         }
//     }
//   return total;  
// }

// resul = getResultByTest('RR', 1, 5, 8, 6);
// console.log(resul);

// let summa = 0;
// const getScores = (email, ...arr) =>
// {
//     console.log(email);
//     console.log(arr);
//     for (let k of arr) {
//         summa += k;
//     }
//     return summa;
// }
// let resul = getScores('RR@mail', 1, 5, 8, 6);
// console.log(resul);

// Рассыпаем массив
// const scores = [12, 15, 5, 8, 6, 56]

// console.log(Math.min(...scores));
// console.log(Math.max(...scores));

// //Через функцию наименьшее число
// const smallerNumber = function (numbers) {
//     let smallerNumber = [0];
//     if (num < smallerNumber) {
//         smallerNumber = num;
//     }
//     return smallerNumber;
// }
// console.log(smallerNumber(5, 6, 7, 89, 56, 23));


//ИЗменение строки и приведение к одному регистру
const slugify = function (string) {
    // const normalizeString = string.toLowerCase();
    // const words = normalizeString.split(' ');
    // const slug = words.join('-');
    // return slug;
    return string.toLowerCase().split(' ').join('-');

}
console.log(slugify('To love This coMpanY'));