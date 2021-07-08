
// const buttonRef = document.querySelector('.js-button');
// console.log(buttonRef);
// const handleButtonClick = function (){
// console.log('Клик по кнопке' );
// };
// buttonRef.addEventListener('click', handleButtonClick);
// //отложеный вызов регистрации событий
// function addEventListener(evenType, callback) {
//     if (evenType = '') {
//         callback();
//     }
// }

// //Отложенный вызов геолокации
// const onGetPositionSuccess = function (position) {
//     console.log(position);
// }
// const onGetPositionError = function (error) {
//     console.log(error);
// }
// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

//Отложенный вызов Интервалы
const callback = function () {
    console.log('Через 2 сек внутри колбека  в таймауте');
};
console.log('В коде перед таймаут');
setTimeout(callback, 2000);
console.log('В коде после таймаута');

