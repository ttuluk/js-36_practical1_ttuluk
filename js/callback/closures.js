const fnA = function (parametr) {
    const innerVariable = 'значение переменной в fnA';

    const innerFunction = function () {
        console.log(innerVariable);
        console.log(parametr);
    }
    return innerFunction;
}
const fnB = fnA('fh');
console.log(fnA);
console.log(fnB);
fnB();
fnB('hero');


/*
 * Поварёнок
 */
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
}

makeDish('Mango', 'пирожок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'чай');

makeDish('Poly', 'котлеты');
makeDish('Poly', 'супик');
makeDish('Poly', 'кофе');
const makeSheff = function (name) {
    const makeDish = function (dish) {
       console.log(`${name} готовит ${dish}`)
    }
    return makeDish;
}
const polianna = makeSheff('Polianna');
console.log(makeSheff('Polianna'));
polianna('рыбу');