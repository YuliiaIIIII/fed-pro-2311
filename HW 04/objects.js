// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера) Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua) Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки. Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження

// let userWallet{
//   amountUsa: , 
//   amountEuro: , 
//   amountUa: 
// }
// bank = [];


// 2)Створити функцію move яка повертає текст на скільки кроків і куди (отримане значення) змістився користувач . Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек. moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)



// 3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву
let elements = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"];
// let elements = [];
function removeElements(){
  if(!elements.length){
    alert("Empty array");
  }
  for(i=1; i<=elements.length; i++){
    elements.splice(i, 1);
  }
  console.log(elements);
}
removeElements();


// 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,

// let figurs = [
//     {
//         figure:"Squar",
//         sizeA: 4,
//         sizeB: 4
//     },
//     {
//         figure:"Rectangle",
//         sizeA: 4,
//         sizeB: 8
//     }
// ]


// 5) Створити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4
let NumbersArr = [2,3,5,4,8,7,9,10];
let multiArr = [];
for(let n=0; n<NumbersArr.length; n++){
  if(NumbersArr[n]%2 == 0){
    let multiple = NumbersArr[n] * 4;
    // console.log(multiple);
    multiArr.push(multiple);
    // console.log(multiArr);
  }
}
console.log(multiArr)