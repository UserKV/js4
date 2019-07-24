'use strict'

// Вывести в консоль произведение цифр числа 33721.
let num = 33721;
let com = 1;
for (let i = 10000; i >= 1; i = i / 10) {
    com = com * Math.floor(num / i);
    num = num - (Math.floor(num / i) * i);
}

console.log(com);

// Возвести в степень 3 полученный результат использую только 1 оператор.
let pow3 = com**3;

// Вывести на экран первые две цифры pow3.
let spow3 = '' + pow3;
alert(spow3[0] + ' ' + spow3[1]);