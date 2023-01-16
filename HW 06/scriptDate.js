// 1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень
function sumOfArguments(a, b, c){
  let sumNumbers = 0;
  for (let j = 0; j<arguments.length; j++)
    sumNumbers += arguments[j];
    console.log(sumNumbers);
    return sumNumbers;
}
sumOfArguments(2,3,4,5,6,7);



// 2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає вік користувача і якщо сьогодні день народження користувача то вивести привітання.
let day = parseInt(prompt("Type a day: ")); 
let month = parseInt(prompt("Type a month: "));
let year = parseInt(prompt("Type a year: "));

const today = new Date(); 

    function birthday(year, month, day){
      const today = new Date();
      let thisYear = today.getFullYear();
      let thisMonth = today.getMonth();
      let thisDay = today.getDate();
      let afterBirthday = thisYear-year;
      let beforeBirthday = (thisYear-year)-1;

      month -= month;
      // const userBirthday = new Date(year,month,day);
      if(day==thisDay && month==thisMonth){
        alert ("Happy birthday to you!!!");
        return;
      }else if(month==thisMonth){
          if(day<thisDay){
            return `User age is ${afterBirthday}`;
          }else{
            return `User age is ${beforeBirthday}`;
          }
      }  else if(month<thisMonth){
        return `User age is ${afterBirthday}`;
      }
    }

console.log(birthday(year, month, day));



// 3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, і в разі дня народження буде вітати користувача
let dayDate = parseInt(prompt("Type a day: ")); 
let monthMonth = parseInt(prompt("Type a month: "));
let yearYear = parseInt(prompt("Type a year: "));

    function fnBirthday(monthMonth, dayDate){
      const todayDay = new Date();
      let thisMonth = todayDay.getMonth();
      let thisDay = todayDay.getDate();
      monthMonth -= monthMonth;
      if(dayDate==thisDay && monthMonth==thisMonth){
        alert ("Happy birthday to you!!!");
        return;
    }
  }
  fnBirthday(monthMonth, dayDate)

    function birthdayDay(yearYear, monthMonth, dayDate, fnBDay){
      const today = new Date();
      let thisDay = today.getDate();
      let thisMonth = today.getMonth();
      let thisYear = today.getFullYear();
      let afterBirthday = thisYear-yearYear;
      let beforeBirthday = (thisYear-yearYear)-1;
      monthMonth -= monthMonth;
  
      if(monthMonth==thisMonth){
          if(dayDate<thisDay){
            return `User age is ${afterBirthday}`;
          }else{
            return `User age is ${beforeBirthday}`;
          }
      }  else if(monthMonth<thisMonth){
        return `User age is ${afterBirthday}`;
      }
    }

console.log(birthdayDay(yearYear, monthMonth, dayDate, fnBirthday));



// 4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя. Наприклад:
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20
function century (year){
    year = prompt("Type a year: ");
    if(year.length == 4){
        let getCentury = parseInt(year.slice(0, 2));
        let centuryCheck = parseInt(year.slice(-2));
        if(centuryCheck == 00){
            return `This is ${getCentury} century`;
        }else if(01 < centuryCheck < 99){
            return `This is ${getCentury + 1} century`;          
        }
    }else{
        alert `Send a correct year`
        return;
    }
}
console.log(century()); 



// 5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )
let allDaysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const checkDays = new Date(2023, 02);
// const checkDays = new Date();

function daysCounter(arrDays){
  const currentMonth = checkDays.getMonth();
  const thisMontsDays = arrDays[currentMonth];
  const nextMonthDays = arrDays[currentMonth+1];
  return `В цьому місяці - ${thisMontsDays} днів. В наступному місяці - ${nextMonthDays} днів.`}

console.log(daysCounter(allDaysArr));