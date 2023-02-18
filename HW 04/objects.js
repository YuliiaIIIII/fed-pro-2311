// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера) Створити массив обєктів bank в якому є обєкти з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua) Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки. Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження
let userWallet = {
  amountUsd: 0, 
  amountEuro: 0, 
  amountUah: 0 
}

bank = [
    {
        name: "usd",
        buy: 40.5,
        sell: 40.0
    },
    {
        name: "euro",
        buy: 42.5,
        sell: 41.75
    },
    {
        name: "uah",
        buy: 1.0,
        sell: 1.0
    }
];

userWallet.amountUsd = parseFloat(prompt("Вкажіть скільки USD покласти до гаманця:"));
userWallet.amountEuro = parseFloat(prompt("Вкажіть скільки EURO покласти до гаманця:"));
userWallet.amountUah = parseFloat(prompt("Вкажіть скільки UAH покласти до гаманця:"));

function converter(arrayValue){
    if(userWallet.amountUah<=0){
        alert("Your balance is too low!");
        return;
    }
    arrayValue.forEach((item) => {console.log(`За ${userWallet.amountUah} UAH ви можете купити ${(userWallet.amountUah / item.buy).toFixed(2)} ${(item.name).toUpperCase()}.`)});
}
converter(bank);

function sellAllAmount(arrayValue){

    const allCurrency = [];
    for (let value in userWallet){
        allCurrency.push(userWallet[value])
    }
    
    let totalWallet = 0;
    const sellAmount = [];
    for(let value of arrayValue){
        sellAmount.push(value.sell);
    }

    for (let i = 0; i < bank.length-1; i++){
        let allExchange = allCurrency[i]*sellAmount[i];
        totalWallet += allExchange;
    }
    console.log(`Продавши свої збереження ви можете отримати ${totalWallet} UAH.`);   
}
sellAllAmount(bank);


// 2)Створити функцію move яка повертає текст на скільки кроків і куди (отримане значення) змістився користувач . Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек. moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)
let direction = prompt("Вкажіть напрямок переміщення (west, east, north, south):");
let steps = parseInt(prompt("Вкажіть кількість кроків:"));

function move(){
    return `Юзер перемістився на ${direction} на ${steps} кроків`
}
move();

function moveUser(fn){ 
    console.log(fn(move));
}
moveUser(move);

 

// 3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву
let elements = [];
let elementsLong = parseInt(prompt("How much elements will be addet to the arrow?"));
for(j=0; j<elementsLong; j++){
  if(j%2 == 0){
    elements.push("Keep");
  }else{
    elements.push("Remove");
  }
}
// console.log(elements);

function removeElements(){
  if(!elements.length){
    alert("Array is empty");
  }
  for(i=1; i<=elements.length; i++){
    elements.splice(i, 1);
  }
  console.log(elements);
}
removeElements();



// // 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,
// let figurs = [
//     {
//         figure:"Square",
//         sizeA: 4,
//         sizeB: 4
//     },
//     {
//         figure:"Rectangle",
//         sizeA: 4,
//         sizeB: 8
//     }
// ]
// figurs.square = function(){ 
//     for(i=0; i<figurs.length; i++){
//         let result = figurs[i].sizeA * figurs[i].sizeB;
//         console.log(`Фігура ${figurs[i].figure} з площею ${result}`);
//     }
// }
// figurs.square();

let figurs = [
    {
        figure:"Square",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]

function square(element){ 
    for(i=0; i<element.length; i++){
        let result = element[i].sizeA * element[i].sizeB;
        console.log((`Фігура ${element[i].figure} з площею ${result}`));  
    }
}
square(figurs);



// 5) Створити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4
let NumbersArr = [2,3,5,4,8,7,9,10];

function multiple(value, index, array) {
    let newArray = [];
    newArray[index] = (value%2 == 0)?array[index] = value * 4:array[index] = value;
    // if(value%2 == 0){
    //     array[index] = value * 4;
    // }
}
NumbersArr.forEach(multiple);
console.log(NumbersArr);

///////// 2-nd option
// let NumbersArr = [2,3,5,4,8,7,9,10];
// let newArray = [];
// function multiple(value,index,array){
//     if(value%2 == 0){
//       array[index] = value * 4;
//     }else{
//       array[index] = value;
//     }
//     newArray.push(array[index]);
//     console.log(newArray,22);
//   }
// NumbersArr.forEach(multiple);
// console.log(NumbersArr);
// // console.log(newArray);