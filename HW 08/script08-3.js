// 3) Створити таблицю за допомогою js з полями: імя, місто, курс і заповнити її даними також за допомогою js. В таблиці повино бути мінімум 2 рядки

window.onload = ()=>{

let tHeadItems = ["Ім'я", "Місто", "Курс"];
let studentsArray =[
    {
        name: "Albert",
        city: "Cherkasy",
        course: "Frontend"
    },
    {
        name: "Timon",
        city: "Lviv",
        course: "Backend"
    },
    {
        name: "Matilda",
        city: "Odesa",
        course: "Frontend"
    },
    {
        name: "Stepan",
        city: "Cherkasy",
        course: "Backend"
    },
    {
        name: "Mariia",
        city: "Kyiv",
        course: "Frontend"
    },
]

let table = document.getElementById('table');
let thead = document.createElement('thead');
table.appendChild(thead);
let tr = document.createElement('tr');
thead.appendChild(tr);
let tbody = document.createElement('tbody');
table.appendChild(tbody);

table.setAttribute('style','margin: 0 auto; border-collapse: collapse; border: 2px solid darkblue; width:60%; text-align: center;');

function addTableHead(array){
  array.forEach((item)=>{
    let th = document.createElement('th');
    th.innerText = item;
    th.setAttribute('style','background: lightblue; border: 2px solid darkblue;');
    tr.appendChild(th);
    });
};
  
addTableHead(tHeadItems);

for (let student of studentsArray) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = student.name;
	tr.appendChild(td1).setAttribute('style','border: 1px solid darkblue;');
	
	let td2 = document.createElement('td');
	td2.textContent = student.city;
	tr.appendChild(td2).setAttribute('style','border: 1px solid darkblue;');
	
	let td3 = document.createElement('td');
	td3.textContent = student.course;
	tr.appendChild(td3).setAttribute('style','border: 1px solid darkblue;');
	
	table.appendChild(tr);
    }
}