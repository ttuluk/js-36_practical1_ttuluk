// экспортируем по дефолту из текущего файла фукнкции для использования в других файлах
export default { createObject, getInputValues};
// export default { createObject, , getNames, createTemplateObject };

//создание объекта
// const user = {
//     name: 'Tanya',
//     phone: '000 000 00 00',
//     email: 'ttasya.k@gmal.com',
//     pass: '111',
//     confirmPass: '111',
// };
// console.log(user);
// console.log({});

//через {} + Spread
// const student = { status: 'active', ...user }
// console.log(student);

//свойства и методы

// обращаемся через key
// console.log(user.name);//Tanya
// console.log(user['name']);//Tanya
// console.log(user.age);//undefined

//добавление нового свойства
// user.age = 32;
// console.log(user.age);//32
// user['age'] = 20;
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(student.age);

//удаление свойства
// delete user.age;
// console.log(user.age);//undefined

// короткие свойства
// function createObject(name, phone, email, pass, confirmPass) {
//     const obj = {
//         name: name,
//         phone: phone,
//         email: email',
//         pass: pass,
//         confirmPass: confirmPass,
//     };
//     return obj;
// };
// console.log(createObject());
function createObject(name, phone, email, pass, confirmPass) {
    const obj = {
        name,
        phone,
        email,
        pass,
        confirmPass,
    };
    return obj;
};


const users = JSON.parse(localStorage.getItem('users'));//достаем из хранилища созданные данные
console.log('users', users);

const phoneDB = [];
const mailDB = [];
const pasvordsDB = [];

for (let user of users) {
    console.log(user);
//деструктуризация свойств
    const { phone, email: mail, pass } = user;
    phoneDB.push(phone);
    mailDB.push(mail);
    pasvordsDB.push(pass);

}
console.log(phoneDB);
console.log(mailDB);
// соберем все параметры из инпутов через РЕСТ

function getInputValues(...args) {
    console.log(args);
    console.log(arguments);
}


