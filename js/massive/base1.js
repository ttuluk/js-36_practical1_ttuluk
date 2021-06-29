// //пустой массив
// const prime = [];
// console.log(prime);

// const vanilla = [1, 2, 3, 4, 5, 10];
// console.table(vanilla);
// console.log(vanilla.length);

// const lastIndex = vanilla.length - 1;
// const num = vanilla[lastIndex];
// console.log(num);
// //массив сохраняется как ссылка и все переменные тоже копируют адрес но не массив
// const massive = vanilla;
// console.log(massive);

// massive[2] = 266;
// console.log(massive);
// console.log(vanilla);
// vanilla[6] = 1000;
// console.log(vanilla);
// console.log(massive);

// for (let i = 0; i < lastIndex; i += 1) {
//     massive[2] = 0;
// }
// console.table(massive);

// for (let mas of massive) {
//     console.log(massive);
// // }
// let title = 'How to become a JUNIOR developer in TWO WEEKS';
// let word = title.split('');
// let slug = '';
// for (const words of word) {
//     if (words === words.toUpperCase()) {

//         slug += words.toLowerCase();
//     }
//     else {
//         slug += words.toLowerCase();
//     };

//     const spacer = slug.split(' ').join('-');
// console.log(spacer);
// }
  

function getEvenNumbers(start, end) {
    let array = [];
    for (let i = 0; i <= end; i += 1) {
        array += i;
        if (array[i] % 2 === 0) {
            console.log(array);
        }
    }
    console.log(array);
    return array;
}
console.log(getEvenNumbers(2, 5));
