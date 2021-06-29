//занятие 20,06
const array = ['kate', 'merlin', 'kity', 'sens'];
// console.log(array);//(4) ["kate", "merlin", "kity", "sens"]
// console.log(array.length);//4
// console.log(array.indexOf('sens'));//3

// //меняем в массиве значения
// let names = array[2];
// console.log('name', names);//name kity

// names = 'lily';
// console.log('name', names);//name lily
// console.log(array);//массив остался тот же//(4) ["kate", "merlin", "kity", "sens"]
// array[2] = 'loky';
// console.log(array);//(4) ["kate", "merlin", "loky", "sens"]

// //for , for ... of
// for (let i = 0; i < array.length; i += 1) {
//     console.log(array);
//     console.log(array[i]);
// }
// //шаг 2
// for (let i = 0; i < array.length; i += 2) {
//     console.table(array);
//     console.log(array[i]);
// }
//undefine
// for (let i = 0; i < array.length; i += 2) {
//     console.table(array);
//     console.log(array[5]);
// }

// array.length = 10;
// console.table(array);
// console.log(array[6]);

//четные
// for (let i = 0; i < array.length; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }

//     console.log(array[i]);
// }

// for (let student of array) {
//     if (student === 'merlin') {
//         break;
//     }
//     console.log(student);
// }
// //
const students = ['Don', 'Ben', 'Bob', 'Vasya'];
console.log(students);
for (let student of students) {
    if ( student === 'Vasya') {
        break;
    }
  console.log(student);  
}
