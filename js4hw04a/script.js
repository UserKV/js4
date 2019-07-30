'use strict'

// Дополнительное задание.
let str = "урок-3-был слишком легким";

str = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(str);

str = str.replace(/-/g, " ");
console.log(str);

let wrd = str.slice(-6);
console.log(wrd);

wrd = wrd.slice(0, -2) + "оо";
console.log(wrd);

let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        sum = sum + arr[i];
    }
}
console.log(Math.sqrt(sum));

function myfn(x) {
    if (typeof(x) != "string") {
        console.log("Необходимо ввести строку.");
        return;
    };
    let str = x.trim();
    if (str.length > 50) {
        str = str.slice(0, 50) + "...";
    }
    console.log(str);
}
//myfn(250);
myfn("Я помню чудное мгновенье, передо мной явилась ты, как мимолетное видение, как гений чистой красоты.");