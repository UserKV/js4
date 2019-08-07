// Получить кнопку 'Начать расчет' через id.
let startBtn = document.getElementById('start');

// Получить все блоки в правой части программы через классы
// (которые имеют класс название-value, начиная с <div class='budget-value');
//и заканчивая <div class='yearsavings-value');).
let budgetValue = document.getElementsByClassName('budget-value');
let daybudgetValue = document.getElementsByClassName('daybudget-value');
let levelValue = document.getElementsByClassName('level-value');
let expensesValue = document.getElementsByClassName('expenses-value');
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value');
let incomeValue = document.getElementsByClassName('income-value');
let monthsavingsValue = document.getElementsByClassName('monthsavings-value');
let yearsavingsValue = document.getElementsByClassName('yearsavings-value');

// Получить поля(input) c обязательными расходами через класс. (class='expenses-item').
let expensesItem = document.getElementsByClassName('expenses-item');
//console.log(expensesItem);

// Получить кнопки 'Утвердить' и 'Рассчитать' через Tag, каждую в своей переменной. 
let buttons = document.getElementsByTagName('button');
let expensesItemBtn = buttons[0];
let optionalExpensesBtn = buttons[1];
let countBudgetBtn = buttons[2];
//console.log(optionalExpensesBtn);

// Получить поля для ввода необязательных расходов (optionalexpenses-item)
// при помощи querySelectorAll.
let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');
//console.log(optionalExpensesItems);

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс,
// сумма, процент, год, месяц, день).
let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('.savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');
//console.log(choosePercent);