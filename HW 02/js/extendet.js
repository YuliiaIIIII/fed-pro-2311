// - напишіть змінні які питають логін та пароль з prompt  якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"
let login = prompt('Введіть Ваш логін: ', '');
let pass = prompt('Введіть Ваш пароль: ', '');

if(login == "admin" && pass == "12345"){
    alert("Вітаємо в системі!");
} else {
    alert("Пароль/логін не вірні");
}


// - отримати 3 значення від користувача і порахувати середнє значення цих значень
let maxNumbers = 3;
let attempt = 0;
let resAverage;
let resultValue = 0;
while(attempt<maxNumbers){
    let number = prompt('Введіть число: ', '');
    attempt++;
    number = parseFloat(number);
    resultValue = resultValue + number;
    // console.log(resultValue);  
}
resAverage = resultValue/maxNumbers
console.log(resAverage);


// - Спитати в користувача вік, далі використовуючи тернарний оператор ( це скорочений запис іf ) створити змінну яка отримує true якщо вік більше 18  i false якщо менше
let age = prompt('Введіть ваш вік: ', 0);
let ageResult = "Ваш вік більше 18 " + (age ? age > 18 : age < 18);
console.log(ageResult);


// - створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі
let planetName = prompt('Напишіть назву планети: ', '');
switch (planetName){
    case 'Mercury': 
    case 'Меркурій':
    console.log(planetName + " - це перша планета Сонячної системи");
    break;
    case 'Venus': 
    case 'Венера': 
    console.log(planetName + " - це друга планета Сонячної системи");
    break;
    case 'Earth': 
    case 'Земля':
    console.log(planetName + " - це третя планета Сонячної системи");
    break;
    case 'Mars': 
    case 'Марс':
    console.log(planetName + " - це четверта планета Сонячної системи");
    break;
    case 'Jupiter': 
    case 'Юпітер': 
    console.log(planetName + " - це п'ята планета Сонячної системи");
    break;
    case 'Saturn': 
    case 'Сатурн': 
    console.log(planetName + " - це шоста планета Сонячної системи");
    break;
    case 'Uranus': 
    case 'Уран': 
    console.log(planetName + " - це сьома планета Сонячної системи");
    break;
    case 'Neptune': 
    case 'Нептун': 
    console.log(planetName + " - це восьма планета Сонячної системи");
    break;
    case 'Pluto': 
    case 'Плутон': 
    console.log(planetName + " - це дев'ята планета Сонячної системи");
    break;
    default:
    console.log("Такої планети нема в сонячній системі");
}


// - Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3% і вивести значення якщо більше 3000 то порахувати знижку 5% і якщо більше 10000 то порахувати знижку 7% в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"
let numberValue = prompt("Вкажіть число більше 0:", '');
numberValue = parseFloat(numberValue);
let discount3 = 0.03;
let discount5 = 0.05;
let discount7 = 0.07;

if(numberValue <= 0){
alert("Не коректне число.");
numberValue = prompt("Вкажіть число більше 0:", '');
}  
    
if(numberValue > 100 && numberValue < 3000){
    console.log(`Ваша знижка становить 3%. До сплати: ${numberValue - numberValue * discount3} грн.`);
}
    else if(numberValue >= 3000 && numberValue < 10000){
    console.log(`Ваша знижка становить 5%. До сплати: ${numberValue - numberValue * discount5} грн.`);
}
    else if(numberValue >= 10000){
    console.log(`Ваша знижка становить 7%. До сплати: ${numberValue - numberValue * discount7} грн.`);
}
else{
    console.log("У вас нема знижки. До сплати: " + numberValue);
}
    
    
// - отримати від користувача назву трарини і за допогомою світч вивести звук який вона видає . Наприклад корова: му-му  і т.д
let petName = prompt("Вкажіть назву тварини:");
switch (petName){
    case 'Кіт':
        alert(petName + " каже м'яв");
        break;
    case 'Собака':
        alert(petName + " каже гав");
        break;
    case 'Пташка':
        alert(petName + " каже цвіріньк");
        break;
    case 'Змія':
        alert(petName + " каже сссссс");
        break;
    case 'Корова':
        alert(petName + " каже мууу");
        break;
    case 'Свиня':
        alert(petName + " каже хрю");
        break;
    default:
        alert("Таку тварину ще не завезли у наш зоопарк :)");
    }