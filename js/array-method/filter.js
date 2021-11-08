// 4. Array.prototype.filter()
// Применяет callback-функцию к каждому элементу исходного массива и если результат ее выполнения имеет значение true, то копирует значение из исходного массива в новый массив. Исходный и новый массив могут иметь разную длину. Не мутирует исходный массив. Всегда возвращает массив, даже если в нем всего 1 элемент. Если ничего не найдено, вернет пустой массив. Используется, когда необходимо найти более одного элемента в коллекции.

// array.filter(callback[currentValue, index, array])
// Copy
// Используется для фильтрации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

