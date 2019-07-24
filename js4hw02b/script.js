'use strict'

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let reqExpens = prompt("Введите обязательную статью расходов в этом месяце.");
let reqMoney = prompt("Во сколько обойдется?");
appData.expenses[reqExpens] = reqMoney;

alert("Ваш бюджет на 1 день составляет: " + money/30);

console.log(appData);