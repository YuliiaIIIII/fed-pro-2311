// 1) Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.
// let arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
// let evenNumbersArrow = [];
// function oddArray(){
//   for(let i=0; i<arrRandomNumbers.length; i++){
//     if(arrRandomNumbers[i]%2 == 0){
//       evenNumbersArrow.push(arrRandomNumbers[i]);
//     }
//   }return evenNumbersArrow;
// }
// oddArray();
// console.log(evenNumbersArrow);


// 2) Створити цикл який 5 разів виводить prompt запитує що купити і вводить це в массив. 
// let userValue = 0;
// let newArr = [];
// for(let i=0; i<5; i++){
//   userValue = prompt("What do we need to buy?","");
//   newArr.push(userValue);
// }
// console.log(newArr);


// 3) Створити функцію яка отримує як аргумент массив і вираховує середнє значення всіх чисел. (при розрахунках вважайте що массив може бути будьякої довжини переданий)
// let randomArr = [1,3,5,9,2];

// let GetRandomArr = [];
// let askLength = prompt("Скільки чисел буде додано в масив?");
// if(askLength%1 !== 0){
//   alert("Введіть ціле число!")
// }
// for (let t = 0; t<askLength; t++){
//   let userNumber = prompt("Введіть число: ");
//   userNumber = parseFloat(userNumber);
//   GetRandomArr.push(userNumber);
//   // console.log(GetRandomArr)
// }

// function average(GetRandomArr){
//   let countValue = 0;
//   let averageValue = 0;
//   for(let i=0; i<GetRandomArr.length; i++){
//     countValue += GetRandomArr[i];
//     // console.log(countValue);
//   }
//     averageValue = countValue / GetRandomArr.length;
//     console.log(averageValue);
// }
// average(GetRandomArr);


// 4) Створити функцію яка замінює в массиві =) на ;)
let smile = [':)', '=)',':)', '=)',':)', '=)'];
let whinkle = ';)';
function newSmile(){

}

// 5) створити функцію яка отримує аргумент, якщо це 'last' то функція створює массив поміщає в нього останній елемент массиву  і видаляє останній елемент  массиву animals, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з animals
let animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
// let userValue = prompt("Choose a first or a last ","");
function newAnimal(userValue){
  
  if(userValue == last){
    let lastAnimal = [animals[5]];
    
    animals.pop();
    console.log(animals);
  }else if(userValue == first){
    let firstAnimal = [animals[0]];
    animals.shift();
    console.log(animals);
  }else{
    alert("Choose a correct value!")
  }
}newAnimal;

// 6) Напишіть функцію яка отримує массив і повертає сумму всіх значень массиву
// let GetArr = [];
// let GetLength = prompt("Скільки чисел буде в масиві?");
// if(GetLength%1 !== 0){
//   alert("Введіть ціле число!")
// }
// for (let j = 0; j<GetLength; j++){
//   let userNumber = prompt("Введіть число: ");
//   userNumber = parseFloat(userNumber);
//   GetArr.push(userNumber);
//   // console.log(GetArr)
// }

// function average(GetArr){
//   let countValue = 0;
//   for(let n=0; n<GetArr.length; n++){
//     countValue += GetArr[n];
//   }
//     console.log(countValue);
// }
// average(GetArr);


// 7)Створити функцію яка отримує в аргумент старт значення і фініш значення ( старт менше фініша) також отрмує массив задовільної довжини. Функція повина повертати массив в якому вирізанні значення з старт індекса по фініш -->