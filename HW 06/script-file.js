// 1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень
// function countSum(){

// }


// 2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає вік користувача і якщо сьогодні день народження користувача то вивести привітання.
let day = parseInt(prompt("Type a day: ")); 
let month = parseInt(prompt("Type a month: "));
let year = parseInt(prompt("Type a year: "));
const today = new Date(); 

console.log(today.getFullYear());

    function birthday(day, month, year){

        let thisDay = today.getDay;
        let thisMonth = today.getMonth;
        if(day == thisDay  && month == thisMonth){
        alert ("Happy birthday to you!!!");
    }
        let thisYear = today.getFullYear();

        console.log(thisYear, 55);
        return `User age is ${thisYear-year}`;

    
}
  birthday();
  console.log(birthday());

console.log(birthday);

// 3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, і в разі дня народження буде вітати користувача



// 4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя. Наприклад:
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20
// function century (year){
//     year = prompt("Type a year: ");
//     if(year.length == 4){
//         let getCentury = parseInt(year.slice(0, 2));
//         let centuryCheck = parseInt(year.slice(-2));
//         if(centuryCheck == 00){
//             return `This is ${getCentury} century`;
//         }else if(01 < centuryCheck < 99){
//             return `This is ${getCentury + 1} century`;          
//         }
//     }else{
//         alert `Send a correct year`
//         return;
//     }
// }
// console.log(century()); 



// 5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )
// function daysCounter(){

// }