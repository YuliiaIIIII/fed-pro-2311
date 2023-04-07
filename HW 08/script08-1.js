window.onload = ()=>{
// 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
// Дані виводяться в стилізований список,  можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повинні бути данні, які введено і час створення в форматі день, номер місяця, рік і час години хвилини.

const body = document.querySelector('body');
body.setAttribute('style', 'background-color: #a0c6ff78; margin: 0');
const listContainer = document.querySelector('.listContainer');
listContainer.setAttribute('style','margin-top: 50px; text-align: center; font-size: 20px');
const listElement = document.querySelector('.listItems');
listElement.setAttribute('style','text-align: center; list-style-type: none; display: flex; flex-direction: column; align-items: center; padding: 0;');
const ul = document.querySelector('ul');
let listOfNames = [];
let attempts = 5;

function getTime (){
    let dateInfo = new Date();
    let month = dateInfo.getMonth();
    let dateToStr = dateInfo.toString();
    let currentDate = `${dateToStr.slice(0,3)}  ${dateToStr.slice(8,10)}-${month}-${dateToStr.slice(11,21)}`;
    return currentDate;
}

function removeChildren () {
    let allChildren = document.querySelectorAll('p');
    allChildren.forEach((item)=>{
        item.innerHTML = '';
    })
}

function askToContinue (){
    let askUser = confirm(`Наступне значення замінить перше значення в списку. Продовжити?`);
            if(askUser == true){
                let firstElement = listElement.firstElementChild;
                listElement.removeChild(firstElement);
                let newItem = prompt("Вкажіть Ваше ім'я:");
                listOfNames.shift();
                listOfNames.push(newItem);
                removeChildren ()
                addNameToArray();
            }else{
                alert(`Список складено`);
                return;
        }
}

for(let i = 0; i < attempts; i++){
    const item = prompt("Вкажіть Ваше ім'я:");
    listOfNames.push(item);

function addNameToArray() {
        if(listOfNames.length == 5){
            listOfNames.forEach((item)=> {
                let li = document.createElement('li');
                li.setAttribute('style','width: 100%;')
                ul.appendChild(li);
                let p = document.createElement('p');
                let innerText = `Користувача ${item} додано ${getTime ()}`;
                p.innerHTML = innerText;
                p.setAttribute('style','width: 60%; margin: 0 auto;  font-weight: 600; font-size: 20px; color: darkgreen');
                li.appendChild(p);
                }) 
                askToContinue ();
        }
    }
    addNameToArray();
}
}