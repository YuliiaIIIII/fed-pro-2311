// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера) Створити массив обєктів bank в якому є обєкти з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua) Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки. Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження
let userWallet = {
  amountUsd: 0, 
  amountEuro: 0, 
  amountUah: 0 
}

bank = [
    {
        name: "usa",
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
        buy: 0.027,
        sell: 0.025
    }
];

userWallet.amountUsd = parseFloat(prompt("Вкажіть скільки USD покласти до гаманця:"));
userWallet.amountEuro = parseFloat(prompt("Вкажіть скільки EURO покласти до гаманця:"));
userWallet.amountUah = parseFloat(prompt("Вкажіть скільки UAH покласти до гаманця:"));

function converter(){
    if(userWallet.amountUah<=0){
        alert("Your balance is too low!");
    }
    return `За ${userWallet.amountUah} UAH ви можете купити ${(userWallet.amountUah / bank[0].buy).toFixed(2)} USD.\nЗа ${userWallet.amountUah} UAH ви можете купити ${(userWallet.amountUah / bank[1].buy).toFixed(2)} EU.`; 
}
converter(userWallet);
console.log(converter());

function sellAllAmount(){
    let getUAHfromUsd = parseFloat((userWallet.amountUsd * bank[0].sell).toFixed(2));
    let getUAHfromEuro = parseFloat((userWallet.amountEuro * bank[1].sell).toFixed(2));
    let sellAll = parseFloat((getUAHfromUsd + getUAHfromEuro).toFixed(2));
    return `Продаж збережень в долларах принесе Вам ${getUAHfromUsd} UAH.\nПродаж збережень в євро принесе Вам ${getUAHfromEuro} UAH.\nПродаж всіх збережень принесе Вам ${sellAll} UAH.` 

}
sellAllAmount();
console.log(sellAllAmount());



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

function square(figurs){ 
    for(i=0; i<figurs.length; i++){
        let result = figurs[i].sizeA * figurs[i].sizeB;
        console.log((`Фігура ${figurs[i].figure} з площею ${result}`));  
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