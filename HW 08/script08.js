// 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
// Дані виводяться в стилізований список,  можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повинні бути данні, які введено і час створення в форматі день, номер місяця, рік і час години хвилини.

window.onload = ()=>{
    // let list = document.querySelector('.list');
    // // let newLiElement = document.createElement('li');
    // // newLiElement.innerHTML = prompt("Type your name here","");
    // // list.appendChild(newLiElement);
   

    // function getUserData (arrayValue){
    //     for(let i=0; i<10; i++){
    //         let newLiElement = document.createElement('li');
    //         newLiElement.innerHTML = prompt("Type your name here","");
    //         let a = new Date();
    //         let str = a.toString().slice(0,24);
          
    //         let listItem = newLiElement + str;
    //         list.appendChild(newLiElement);
            
    //         console.log(listItem);
    //       }
          
    // }
    // getUserData();
    

    // li.innerText = 'FirstItem';


    // let a = new Date();

 
    // console.log(a);
    // let str = a.toString().slice(0,24);
    // console.log(str);
  

    
    // let bb = "Sun Feb 04 2001 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)"
    // const str = bb.slice(0,24);

    







// 2) створити массив обєктів і на основі нього вивести на сторінку лінки в яких знаходяться зображення і alt для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3 
    let images = [
        {
            imgPath:'img/africanQueen.jpg"',
            alt:'cocktail africanQueen',
            href:'https://spirituosenworld.de/cocktails/african-queen'
        },
        {
            imgPath:'img/angelFace.jpg"',
            alt:'cocktail angelFace',
            href:'https://spirituosenworld.de/cocktails/angel-face'
        },
        {
            imgPath:'img/bijou.jpg"',
            alt:'cocktail bijou',
            href:'https://spirituosenworld.de/cocktails/bijou'
        },
        {
            imgPath:'img/cosmopolitan.jpg"',
            alt:'cocktail cosmopolitan',
            href:'https://spirituosenworld.de/cocktails/cosmopolitan'
        },
        {
            imgPath:'img/nocelloCream.jpg"',
            alt:'cocktail nocelloCream',
            href:'https://spirituosenworld.de/cocktails/nocello-cream'
        },
        
    ]
    let imageAlbum = document.querySelector('.imageLinks');
    imageAlbum.setAttribute('href', images[1].href);
    console.log(imageAlbum);


// 3) Створити таблицю за допомогою js з полями імя, місто,  курс і заповнити її даними також за допомогою js. В таблиці повино бути мінімум 2 рядки


}