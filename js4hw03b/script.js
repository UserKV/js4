'use strict'

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
}

for (let i = 1; i < 3; i++) {
    let reqExpens = prompt("Введите обязательную статью расходов в этом месяце.");
    let reqMoney = prompt("Во сколько обойдется?");

    if (typeof(reqExpens) != null && typeof(reqExpens) === "string" && reqExpens != "" && reqExpens.length < 50 &&
        typeof(reqMoney) != null && reqMoney != "") {
            appData.expenses[reqExpens] = reqMoney;
        }
}

/*
let i = 1;
while (i < 3) {
    let reqExpens = prompt("Введите обязательную статью расходов в этом месяце.");
    let reqMoney = prompt("Во сколько обойдется?");

    if (typeof(reqExpens) != null && typeof(reqExpens) === "string" && reqExpens != "" && reqExpens.length < 50 &&
        typeof(reqMoney) != null && reqMoney != "") {
            appData.expenses[reqExpens] = reqMoney;
        }

    i++;
}
*/

/*
let i = 0;
do {
    let reqExpens = prompt("Введите обязательную статью расходов в этом месяце.");
    let reqMoney = prompt("Во сколько обойдется?");

    if (typeof(reqExpens) != null && typeof(reqExpens) === "string" && reqExpens != "" && reqExpens.length < 50 &&
        typeof(reqMoney) != null && reqMoney != "") {
            appData.expenses[reqExpens] = reqMoney;
        }

    i++;
}
while (i < 2)
*/

appData.moneyPerDay = appData.budget / 30;
alert("Ваш бюджет на 1 день составляет: " + appData.moneyPerDay);

console.log(appData);