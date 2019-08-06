// Дополнительное задание.

// Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'.
// Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят
//из одной цифры (из 1.6.2018 сделает 01.06.2018).
function normalFormat(value) {
    let fullStr = '' + value;
    if (fullStr.length == 1) {
        fullStr = '0' + value;
    }
    return fullStr;
}

let date = new Date();
let hours = normalFormat(date.getHours());
let minutes = normalFormat(date.getMinutes());
let seconds = normalFormat(date.getSeconds());
let day = normalFormat(date.getDate());
let month = normalFormat(date.getMonth());
let year = date.getFullYear();
let curDT = hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year;
           
let curDateTime = document.querySelector('#curDateTime');
curDateTime.textContent = 'Текущая дата и время: ' + curDT;

// Напишите функцию, которая выводит на страницу текущий день недели на русском языке
// (реализацию выбираете сами).
function weekDay() {
    let nWeekDay = new Date().getDay();
    let sWeekDay = '';

    switch (nWeekDay) {
        case 0: {
            sWeekDay = 'Воскресенье';
            break;
        }
        case 1: {
            sWeekDay = 'Понедельник';
            break;
        }
        case 2: {
            sWeekDay = 'Вторник';
            break;
        }
        case 3: {
            sWeekDay = 'Среда';
            break;
        }
        case 4: {
            sWeekDay = 'Четверг';
            break;
        }
        case 5: {
            sWeekDay = 'Пятница';
            break;
        }
        case 6: {
            sWeekDay = 'Суббота';
            break;
        }
        default: {
            sWeekDay = '';
        }
    }

    let curWeekDay = document.querySelector('#curWeekDay');
    curWeekDay.textContent = 'Текущий день недели: ' + sWeekDay;
}

weekDay();

// Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней.
// На странице создайте интерфейс для её отображения: как минимум - 3 input’a:
// для двух ввода дат и вывода результата.
function diffDates(date1, date2) {
    let msDiff = +new Date(date2) - new Date(date1);
    return msDiff / 1000 / 60 / 60 / 24;
}

let inpDiff = document.querySelector('#diffDates');
let date1 = document.querySelector('#date1').value;
let date2 = document.querySelector('#date2').value;
inpDiff.value = diffDates(date1, date2);