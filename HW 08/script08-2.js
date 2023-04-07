// 2) створити массив обєктів і на основі нього вивести на сторінку лінки в яких знаходяться зображення і alt для зображення, стилізувати довільно, кількість обєктів в массиві більше 3 

window.onload = ()=>{

let body = document.querySelector('body');
body.style.backgroundColor = 'black';
body.style.margin = '0 auto';
body.style.textAlign = 'center';

class Coctails {
    constructor(image, alt, href) {
        this.image = image;
        this.alt = alt;
        this.href = href;
    }
}

let africanQueen = new Coctails ('img/africanQueen.jpg','cocktail africanQueen','https://spirituosenworld.de/cocktails/african-queen');
let angelFace = new Coctails ('img/angelFace.jpg','cocktail angelFace','https://spirituosenworld.de/cocktails/angel-face');
let bijou = new Coctails ('img/bijou.jpg','cocktail bijou','https://spirituosenworld.de/cocktails/bijou');
let cosmopolitan = new Coctails ('img/cosmopolitan.jpg','cocktail cosmopolitan','https://spirituosenworld.de/cocktails/cosmopolitan');
let nocelloCream = new Coctails ('img/nocelloCream.jpg','cocktail nocelloCream','https://spirituosenworld.de/cocktails/nocello-cream');

const coctailsArray = [africanQueen, angelFace, bijou, cosmopolitan, nocelloCream];
const coctailNames  = ["African Queen", "Angel Face", "Bijou", "Cosmopolitan", "Nocello Cream"];

for (let i = 0; i < coctailsArray.length; i++){
    let imageLinks = document.querySelector('.imageLinks'); //отримуємо доступ до класу .imageLinks
    imageLinks.setAttribute('style', 'display: flex; justify-content: center;');
    let imgDiv = document.createElement('div'); //створюємо 'div' для зображення і підпису
    imgDiv.setAttribute('class', 'coctail');
    imageLinks.appendChild(imgDiv); //додаємо 'div' в клас .imageLinks

    let link = document.createElement('a'); //створюємо лінк - елемент 'а'
    let image = document.createElement('img'); //створюємо зображення - елемент 'img' 
    image.setAttribute('style','margin: 5px; width: 200px; border: 2px solid yellow;');

    imgDiv.appendChild(link); //додаємо лінк в 'div'
    link.appendChild(image); //додаємо до лінка 'а' зображення 'img'
    image.src = coctailsArray[i].image;
    image.alt = coctailsArray[i].alt;
    link.href = coctailsArray[i].href;

    let description = document.createElement('p'); //створюємо 'p'
    description.innerHTML = coctailNames[i]; //додаємо текст з масива coctailNames
    description.setAttribute('style','color: yellow;');
    imgDiv.appendChild(description); //додаємо 'p' в загальний 'div' із зображенням
    }
}