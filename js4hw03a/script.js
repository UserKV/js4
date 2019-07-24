'use strict'

// Дополнительное задание 01.
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < 7; i++) {
    if (i == 2) {
        document.write('<i>' + week[i] + '</i><br/>');
    } else if (i < 5) {
        document.write(week[i] + '<br/>');
    } else {
        document.write('<b>' + week[i] + '</b><br/>');
    }
}

let arr = ['5236', '85429', '778412', '562', '9852', '312685', '91542',];

for (let i = 0; i < 7; i++) {
    if ((+arr[i][0] == 3) || (+arr[i][0] == 7)) {
        console.log(arr[i]);
    }
}

// Дополнительное задание 02.
let x = 5;
alert(x++);
// 5. Постфиксная операция.

console.log([] + false - null + true);
// NaN

let y = 1;
x = y = 2;
alert(x);
// 2

console.log([] + 1 + 2);
// 12. Преобразуется в строку.

alert("1"[0]);
// 1. Берется первый символ строки.

console.log(2 && 1 && null && 0 && undefined);
// null. Первое ложное значение.

let a = true;
let b = false;
console.log(!!(a && b));
console.log(a && b);
// Нет разницы.

alert(null || 2 && 3 || 4);
// 3. Операция && выполняется слева направо.

a = [1, 2, 3];
b = [1, 2, 3];
console.log(a == b);
//Правда ли что a == b? Нет.

alert( +"Infinity" );
// Infinity

console.log("ёжик" > "яблоко");
//Верно ли сравнение: "ёжик" > "яблоко"? Да. Код симовола ё больше кода символа я.

console.log(0 || "" || 2 || undefined || true || falsе);
// 2. Первое истинное значение.
