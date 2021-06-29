const friends = [
    { name: 'Oksana', online: false },
    { name: 'Vadim', online: false },
    { name: 'Olesya', online: true },
    { name: 'Kate', online: false },
    { name: 'Max', online: true },
    { name: 'Inna', online: false },
    { name: 'Vasya', online: false },
];
console.table(friends);


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
const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];
    for (const friend of allFriends) {
        if (friend.online) {              //if (!friend.online)-не онлайн!!!
            onlineFriends.push(friend);
        }
    };
return onlineFriends;
};
console.log(getOnlineFriends(friends));

//
console.log();
const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 100,
    e: 45,
}

console.log(Object.keys(x).length);