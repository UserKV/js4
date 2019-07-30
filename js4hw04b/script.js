'use strict';

let money, time;

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
}

function start() {
    let isNotTrueAnswer = true;
    while (isNotTrueAnswer) {
        money = prompt("Ваш бюджет на месяц?");
        isNotTrueAnswer = (money == null || money == "" || isNaN(+money));
    }
    appData.budget = money;

    time = prompt("Введите дату в формате YYYY-MM-DD");
    appData.timeData = time;
}

function chooseExspenses() {
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
}

function chooseOptExspenses() {
    let i = 1;
    while (i < 4) {
        let reqOptExpens = prompt("Введите необязательную статью расходов в этом месяце.");
    
        if (typeof(reqExpens) != null && typeof(reqExpens) === "string" && reqExpens != "" && reqExpens.length < 50) {
                appData.optionalExpenses[i] = reqOptExpens;
            }
    
        i++;
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ваш бюджет на 1 день составляет: " + appData.moneyPerDay);
}

function detectLevel(moneyPerDay) {
    if (moneyPerDay > 10) {
        alert("У Вас высокий уровень достатка!");
    } else if (5 <= moneyPerDay <= 10) {
        alert("У Вас средний урвень достатка.");
    } else if (moneyPerDay < 5) {
        alert("У Вас низкий уровень достатка.")
    }
}

function savingIncom() {
    if (appData.savings) {
        let save = +prompt("Укажите сумму накоплений."),
            percent = +prompt("Укажите процент.");
        appData.saveIncomPerMonth = (save / 100 / 12 * percent).toFixed(2);
    }
}

start();
chooseExspenses();
chooseOptExspenses()
detectDayBudget();
detectLevel(appData.moneyPerDay);
savingIncom();

console.log(appData);