// 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li , отримати доступ до цих елементів і змінити там текст за допомогою innerHtml
window.onload = ()=>{
    let newTitle = document.querySelector(".title h1");
    newTitle.innerHTML = "Welcome message";

    let navHome = document.querySelector(".home");
    navHome.innerHTML = "Hope page";
    let navAbout = document.querySelector(".about");
    navAbout.innerHTML = "About company";
    let navInfo = document.querySelector(".info");
    navInfo.innerHTML = "Information";

    let listItems = document.querySelectorAll(".item");
    listItems.forEach(element => {
        element.innerHTML = "New element";
        
    });

    let contacts = document.querySelector(".contactInfo");
    contacts.innerHTML = "Contact information";


// 2) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль отримане значення  
  
    let liElement = document.querySelector("li");
    console.log(liElement.parentNode);
   

// 3) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
// 4) В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів  ( кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску ) 

    class FilmsList{
        constructor(year, type, title, views){
            this.year = year;
            this.type = type;
            this.title = title;
            this.views = views; 
        }   
        rate(){
            console.log(`Рейтинг фільму ${this.views/(new Date().getFullYear()-this.year)}`);
        }
    }
    let movieBernadette = new FilmsList(2018, "comedy", "WHERE'D YOU GO, BERNADETTE", 33856);
    console.log(movieBernadette);
    movieBernadette.rate();

    // 5) Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктуризації  переберіть масив і виведіть значення по року випуску

    const movieGentlemen = new FilmsList(2019, "action", "The Gentlemen", 20385);
    const movieBatman = new FilmsList(2005, "action", "Batman Begins", 43385);
    const movieWallStreet = new FilmsList(2013, "biography", "The Wolf of Wall Street", 51856);
    const movieTransformers = new FilmsList(2017, "fdventure", "Transformers 5: The Last Knight", 32856);
    const movieFallout = new FilmsList(2018, "action", "Mission: Impossible - Fallout", 31856);
    
    const movieArr = [movieBernadette, movieGentlemen, movieBatman, movieWallStreet, movieTransformers, movieFallout];
    // console.log(movieArr);
    const [Bernadette, Gentlemen, Batman, WallStreet, Transformers, Fallout] = movieArr;
    for(const{year}of movieArr){
        console.log(year);
    }
}
