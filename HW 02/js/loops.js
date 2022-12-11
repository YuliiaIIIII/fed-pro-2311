// - за допомогою циклу вивести в консоль всі парні значення числа 20
let number;
for(number = 0; number <= 20; number++)
if(number%2 == 0){
    console.log(number);
}


// - використовуючи цикл виведіть суму чисел між  А і В з умовою що A<B 
let a = prompt('Введіть перше число:');
let b = prompt('Введіть друге число:');
a = parseFloat(a);
b = parseFloat(b);
let summaryBetween = 0;

for (let m = a+1; m > a && m < b; m++){
    summaryBetween = summaryBetween + m;
}
    console.log(summaryBetween);


// - зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)
for(let n=10; n>=0; n--){
    console.log(n);
}


// - отримайте 2 значення і виведіть за допомогою * в консоль фігуру в якій довжина і ширина це отримані значення. Наприкда а=2 і в=2 буде ось така фігура
// *****
// *****
// *****

let horizontalValue = prompt('Введіть параметр ширини:');
let verticalValue = prompt('Введіть параметр довжини:');
let symbol = " ";

for (let i = 0; i < horizontalValue; i++) {
	symbol = symbol + "*";
}
  for(let j = 0; j < verticalValue; j++){
    console.log("");
    console.log(symbol);
  }