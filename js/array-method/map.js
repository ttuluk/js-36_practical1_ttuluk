// 3. Array.prototype.map()
// Используется для трансформации массива.
// Применяет callback - функцию к каждому элементу исходного массива, результат работы callback - функции записывает в новый массив, который и будет результатом выполнения метода.Исходный и новый массив всегда имеют одинаковую длину.Не мутирует исходный массив.

// array.map(callback[currentValue, index, array])

// Используется для трансформации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию
const numbers = [5, 10, 15, 20, 25];
// const doubleNums = numbers.map(function (num) {
   
//     console.log(num);
// });
// console.log(doubleNums);
const doubleNums = numbers.map(function (num) {
    return num * 2;
});
console.log(doubleNums);


const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
console.table(players);
const playerNames = players.map(player => player.name) 


const inOnline = players.map(player => player.online);
console.log(inOnline);
const iDs = players.map(player => player.id);
console.log(iDs);

const updatePlayers = players.map(player => {
    console.log(player);
    return {
        ...player,
        points: player.points * 2,
        name: `-${player.name}-`
    }
});
console.table(updatePlayers);

const IdUpdatePlayer = 'player-2';
const updatePlayer = players.map(player => {
    console.log(player.id);
    if (IdUpdatePlayer === player.id) {
        return {
            ...player,
            points: player.timePlayed * 2
        }
        return player;
    }
});
console.log(updatePlayer);
// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );
// console.table(updatePlayer);