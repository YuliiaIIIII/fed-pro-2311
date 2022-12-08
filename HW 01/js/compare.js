let langValue = prompt('Введіть значення uk або ru');
console.log(langValue == 'uk');

let numberFirst = prompt('Введіть перше число:');
let numberSecond = prompt('Введіть друге число:');
numberFirst = parseFloat(numberFirst);
numberSecond = parseFloat(numberSecond);
console.log(numberFirst > 20 && numberSecond > 30);
