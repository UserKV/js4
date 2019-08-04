'use strict';

// Вывести в столбик все простые числа от 1 до 100.
function simpleNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    console.log('' + num + ': 1, ' + num);
}

for (let i = 2; i <= 100; i++) {
    simpleNumber(i);
}