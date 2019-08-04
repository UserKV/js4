'use strict'

// Дополнительное задание.
function getFriendlyNumbers(start, end) {
    if (typeof(start) != "number" || typeof(end) != "number" ||
        start < 0 || end < 0 ||
        start != start.toFixed(0) || end != end.toFixed(0) ||
        start > end) {
            return false;
        }

    let friendlyNumbers = [];
    let feindlyCoupe = [];

    for (let i = start; i <= end; i++) {
        for (let j = i++; j <= end; j++) {
            // Найти пары дружественных чисели из диапазона start - end.
        }
    }
    return friendlyNumbers;
}

console.log(getFriendlyNumbers(1, 100));