player = {
    registration: {
        login: 'login',
        password: 'password'
    },
    characters: {}
};

let nameChar = prompt('Укажите имя персонажа.');
let roleChar = prompt('Укажите роль персонажа.');
player.characters[nameChar] = roleChar;

nameChar = prompt('Укажите имя персонажа.');
roleChar = prompt('Укажите роль персонажа.');
player.characters[nameChar] = roleChar;

console.log(player);
