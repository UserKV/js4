'use strict';

let money, time;

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExspenses: function () {
        let i = 1;
        while (i < 3) {
            let reqExpens = prompt("Введите обязательную статью расходов в этом месяце.");
            let reqMoney = prompt("Во сколько обойдется?");
            if (typeof (reqExpens) != null && typeof (reqExpens) === "string" && reqExpens != "" && reqExpens.length < 50 &&
                typeof (reqMoney) != null && reqMoney != "") {
                appData.expenses[reqExpens] = reqMoney;
            }
            i++;
        }
    },
    chooseOptExspenses: function () {
        let i = 1;
        while (i < 4) {
            let reqOptExpens = prompt("Введите необязательную статью расходов в этом месяце.");
            if (typeof (reqExpens) != null && typeof (reqExpens) === "string" && reqExpens != "" && reqExpens.length < 50) {
                appData.optionalExpenses[i] = reqOptExpens;
            }
            i++;
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ваш бюджет на 1 день составляет: " + appData.moneyPerDay);
    },
    detectLevel: function (moneyPerDay) {
        if (moneyPerDay > 10) {
            alert("У Вас высокий уровень достатка!");
        } else if (5 <= moneyPerDay <= 10) {
            alert("У Вас средний урвень достатка.");
        } else if (moneyPerDay < 5) {
            alert("У Вас низкий уровень достатка.")
        }
    },
    savingIncom: function () {
        if (appData.savings) {
            let save = +prompt("Укажите сумму накоплений."),
                percent = +prompt("Укажите процент.");
            appData.saveIncomPerMonth = (save / 100 / 12 * percent).toFixed(2);
        }
    },
    chooseIncom: function() {
        let answer = "",
            emptyAnswer = true;
        while (emptyAnswer) {
            answer = prompt("Введите дополнительные источники дохода (через запятую).", "");
            if (answer != "" && answer != null) {
                emptyAnswer = false;
            }
        }
  
        appData.income = answer.split(", ");
        let tarr = [];
        for (let i = 1; i < appData.income.length + 1; i++) {
            tarr[i] = appData.income[i - 1];
        }
        appData.income = tarr;
        //appData.income.sort();
    }
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

start();
appData.chooseExspenses();
appData.chooseOptExspenses()
appData.detectDayBudget();
appData.detectLevel(appData.moneyPerDay);
appData.savingIncom();
appData.chooseIncom();

document.write("<p>Способы дополнительного заработка:</p><p>");
appData.income.forEach((item, index) => {
    document.write(index + ". " + item + "<br/>");
});
document.write("</p>");

console.log("Наша программа включает в себя данные:");
for (let item in appData) {
    console.log(item);
}

console.log(appData);