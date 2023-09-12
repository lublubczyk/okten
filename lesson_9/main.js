//- створити блок,
//- додати йому класи wrap, collapse, alpha, beta
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//- додати цей блок в body.
//- клонувати його повністю, та додати клон в body.

const divElement = document.createElement('div');
divElement.innerText = 'Hello DOM';
divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
divElement.style.backgroundColor = '#6495ED';
divElement.style.color = 'yellow';
divElement.style.textAlign = 'center';
divElement.style.fontSize = '20px';
divElement.style.padding = '20px';
divElement.style.margin = "5px";

document.body.appendChild(divElement);

const cloneDivElement = divElement.cloneNode(true);
cloneDivElement.innerText = 'Hello DOM clone';

document.body.appendChild(cloneDivElement);


//- Є масив:
//['Main','Products','About us','Contacts']
//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const dataArr = ["Main", "Products", "About us", "Contacts"];

const ulForDataArr = document.createElement('ul');
dataArr.forEach(element => {
    const liForData = document.createElement('li');
    liForData.innerText = element;
    ulForDataArr.appendChild(liForData);
})
document.body.appendChild(ulForDataArr);
//- Є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6 },
    {title: 'Python Complex', monthDuration: 6 },
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

coursesAndDurationArray.forEach(element => {
    const createDiv = document.createElement('div');
    createDiv.innerText = `Курс ${element.title} тривалість ${element.monthDuration} місяців`;
    createDiv.style.margin = '3px';
    createDiv.style.backgroundColor = 'grey';
    createDiv.style.padding = '10px';
    createDiv.style.textAlign = 'center';
    document.body.appendChild(createDiv);
});


//=========================

//- Є масив
//const coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];


//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
//з title  елементу, та < p class='description' > з monthDuration елементу.
//Завдання робити через цикли.

coursesAndDurationArray.forEach((element) => {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `<h1 class='headig'>Назва курсу  ${element.title}</h1>`;
    const createP = document.createElement('p');
    createP.classList.add('description');
    createP.innerText = `Тривалість курсу ${element.monthDuration} місяців`;
    createP.style.fontSize = '25px';
    createDiv.appendChild(createP);
    createDiv.style.margin = '3px';
    createDiv.style.backgroundColor = '#6495ED';
    createDiv.style.padding = '10px';
    createDiv.style.textAlign = 'center';
    document.body.appendChild(createDiv);
});


//==========================

//- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

const simpsons = [
    {
        name: "Bart",
        surname: "Simpson",
        age: 10,
        info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
        photo: "https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png",
    },
    {
        name: "Homer",
        surname: "Simpson",
        age: 40,
        info: "Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.",
        photo:
            "http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    },
    {
        name: "Marge",
        surname: "Simpson",
        age: 38,
        info: "Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png",
    },
    {
        name: "Lisa",
        surname: "Simpson",
        age: 9,
        info: "Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png",
    },
    {
        name: "Maggie",
        surname: "Simpson",
        age: 1,
        info: "Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png",
    },
];

simpsons.forEach(value => {
    const simpsonDiv = document.createElement('div');
    simpsonDiv.style.margin = '5px';
    simpsonDiv.style.backgroundColor = '#00BFFF';
    simpsonDiv.classList.add('member');
    const ulForSimps = document.createElement('ul');
    Object.keys(value).forEach(element => {
        const liForSimps = document.createElement('li');
        liForSimps.innerText = `${element.toUpperCase()} - ${value[element]}`;
        ulForSimps.appendChild(liForSimps);
    });
    simpsonDiv.appendChild(ulForSimps);
    document.body.appendChild(simpsonDiv);
});


//=========================
//Цикл в циклі
//- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
//окремих властивостей, для властивості modules зробити список з елементами
//Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//------------------

const coursesArray = [
    {
        title: "JavaScript Complex",
        monthDuration: 5,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "react", "angular", "aws", "docker", "git", "node.js"]
    },
    {
        title: "Java Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "angular", "aws", "docker", "git", "java core", "java advanced"]
    },
    {
        title: "Python Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "angular", "aws", "docker", "python core", "python advanced"]
    },
    {
        title: "QA Complex",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
    },
    {
        title: "FullStack",
        monthDuration: 7,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "react", "angular", "aws", "docker", "git", "node.js", "python", "java"]
    },
    {
        title: "Frontend",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "react", "angular", "aws", "docker", "git", "sass"]
    },
];

coursesArray.forEach(element => {
    const divTitle = document.createElement('div');
    divTitle.innerHTML = `<h3>Курс ${element.title}</h3>`;
    divTitle.style.backgroundColor = "#90EE90";
    divTitle.style.padding = '10px';
    divTitle.style.textAlign = 'center';
    
    const divForDuration = document.createElement('div');
    divForDuration.style.padding = '10px';
    divForDuration.style.backgroundColor = '#20B2AA';
    divForDuration.style.marginTop = '10px';
    
    const spanForMonthDur = document.createElement('span');
    spanForMonthDur.style.margin = '5px';
    spanForMonthDur.innerText = `Тривалість ${element.monthDuration} місяців`;
    
    const spanForHourDur = document.createElement('span');
    spanForHourDur.style.margin = '5px';
    spanForHourDur.innerText = `в годинах ${element.hourDuration}`;
    
    divForDuration.append(spanForMonthDur, spanForHourDur);
    
    const divForModules = document.createElement('div');
    divForModules.style.backgroundColor = "#66CDAA";

    const ulForModules = document.createElement('ul');

    element.modules.forEach(value => {
        const liForModules = document.createElement('li');
        liForModules.innerText = `Курсик: ${value}`;
        ulForModules.appendChild(liForModules);
    });
    
    divForModules.appendChild(ulForModules);

    document.body.append(divTitle, divForDuration, divForModules);
});