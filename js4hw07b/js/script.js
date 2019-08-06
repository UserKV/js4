

// Восстанвливаем порядок в меню.
let menu = document.querySelector('.menu');
let menuItems = document.getElementsByClassName('menu-item');
menu.insertBefore(menuItems[2], menuItems[1]);

// Добавляяем пятый пункт в меню.
let menuItem = document.createElement('li');
menuItem.classList.add('menu-item');
menuItem.textContent = 'Пятый пункт';
menu.appendChild(menuItem);

// Заменяем картинку заднего фона на другую из папки img.
let body = document.querySelector('body');
body.style.backgroundImage = 'url(../img/apple_true.jpg)';

// Меняем заголовок. Добаляем слово "подлинную" (Получится - "Мы продаем только подлинную технику Apple").
let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удаляем рекламу со страницы.
let columns = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
columns[1].removeChild(adv);

// Спрашиваем у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt".
let answer = prompt('Напишите, как Вы относитесь к технике Apple');
let prmpt = document.querySelector('#prompt');
prmpt.textContent = answer;