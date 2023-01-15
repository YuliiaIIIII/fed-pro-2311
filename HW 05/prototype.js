// 1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, також в юзера повинен бути унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера. 
// Метод повинен бути винесений в прототип.

const userData = new Object();
function UserInfo(userName, userSurname, userAge, userID){
    this.userName = userName;
    this.userSurname = userSurname;
    this.userAge = userAge;
    this.userID = Math.round(Math.random()*10);
    }

    UserInfo.prototype.userDataInfo = function(){
        return `Дані користувача: імя - ${this.userName}, прізвище - ${this.userSurname},вік ${this.userAge},іd номер ${this.userID}.`
    }

const newUser = new UserInfo ("Tim", "Land", "19", "");
console.log(newUser.userDataInfo());
const newUser2 = new UserInfo ("Tom", "Lind", "43", "");
console.log(newUser2.userDataInfo());



// 2)Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити імя, вік користувача. ІD не міняється
const newPerson = new Object();
function PersonData(firstName, age, id){
    this.firstName = firstName;
    this.age = age;
    this.id = id;
}

PersonData.prototype.changeData = function(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

let person = new PersonData("Sem", 21, 1);
console.log(person);
person.changeData("Erik", 25, 2);
console.log(person);



// 3) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі, периметра, та визначення діагоналі
function FigureParameters(sideOne, sideTwo){
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.figureName = function(){
        if(sideOne == sideTwo){
            this.figureName = "square";
            return this.figureName;
            
        }else{
            this.figureName = "rectangle";
            return this.figureName;
        }
    }
}

FigureParameters.prototype.figureSquare = function(){
    return `${this.sideOne * this.sideTwo}` 
}
FigureParameters.prototype.figurePerimeter = function(){
    return `${2 * (this.sideOne + this.sideTwo)}`
}
FigureParameters.prototype.figureDiagonal = function(){
    return `${(Math.sqrt(Math.pow(this.sideOne,2) + Math.pow(this.sideTwo,2))).toFixed(2)}`
}
let newFigure = new FigureParameters(5,5);
console.log(`Figure ${newFigure.figureName()} with side ${newFigure.sideOne} and ${newFigure.sideTwo}.
Square is ${newFigure.figureSquare()}, perimeter is ${newFigure.figurePerimeter()} and diagonal is ${newFigure.figureDiagonal()}`);

let newFigure2 = new FigureParameters(2,5);
console.log(`Figure ${newFigure2.figureName()} with side ${newFigure2.sideOne} and ${newFigure2.sideTwo}.
Square is ${newFigure2.figureSquare()}, perimeter is ${newFigure2.figurePerimeter()} and diagonal is ${newFigure2.figureDiagonal()}`);



// 4) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name в верхньому регістрі.
let userName = prompt("Type your name: ").toUpperCase();
let firstLetter = userName.slice(0,-(userName.length-1));
let lastLetter = userName.slice(userName.length-1);
console.log("The first letter of your name is - " + firstLetter);
console.log("The last letter of your name is - " + lastLetter);



// 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг має довжину більше 10 то відрізає все після 10 і додає 3 крапки
let userString = prompt("Type your text here: ");
let aceptedLength = 10;

function getString (userString){
    userString = userString.trim();
   
    if(userString.length > aceptedLength){
        let newString = userString.slice(0,aceptedLength) + "...";
        console.log(newString);
    }else{
        console.log(userString);
    }
}
getString(userString);