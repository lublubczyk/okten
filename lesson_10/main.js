//Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами: заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//==========================

const inputName = document.createElement('input');
const inputSurname = document.createElement('input');
const inputAge = document.createElement('input');
const subButton = document.createElement('button');
const formForUserData = document.createElement('form');

const attributObj = {
    formUserData:[['action',''],['name','userData']],
    inpName: [['type', 'text' ], [ 'name', 'userName' ], ['placeholder', 'your name' ]],
    inpSurName: [['type', 'text' ], [ 'name', 'userSurName' ], ['placeholder', 'your surname' ]],
    inpAge: [['type', 'number' ], [ 'name', 'userAge' ], ['placeholder', 'your age' ]],
}

attributObj.inpName.forEach(value => inputName.setAttribute(value[0], value[1]));
attributObj.inpSurName.forEach(value => inputSurname.setAttribute(value[0], value[1]));
attributObj.inpAge.forEach(value => inputAge.setAttribute(value[0], value[1]));
attributObj.formUserData.forEach(value => formForUserData.setAttribute(value[0], value[1]));

subButton.innerText = 'Submit';

formForUserData.append(inputName, inputSurname, inputAge, subButton);
document.body.appendChild(formForUserData); 

//const formForUserData = document.forms.userData;

const divForUsersData = document.createElement('div');
document.body.appendChild(divForUsersData);

formForUserData.onsubmit = function (event) {
    event.preventDefault();
    const divUserData = document.createElement('div');
    divUserData.innerText =
        `Name: ${this.userName.value}; Password: ${this.userSurName.value}; Age: ${this.userAge.value}`;
    divForUsersData.appendChild(divUserData);
    this.reset();
};

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному
//перезавантажені сторінки буде додавати до неї + 1

const divForCounter = document.createElement('div');
divForCounter.style.width = '100px';
divForCounter.style.backgroundColor = 'blue';
divForCounter.innerText = '0';
divForCounter.style.color = 'yellow';
divForCounter.style.textAlign = 'center';
divForCounter.style.fontSize = '70px';

document.body.appendChild(divForCounter);
let counter = divForCounter.innerText;
if (localStorage.getItem('counter') === null) {
    localStorage.setItem('counter',counter.toString());
} else {
    counter = +localStorage.getItem('counter');
    counter++;
    localStorage.setItem('counter', counter.toString());
    divForCounter.innerText = counter.toString();
};

//==========================
//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
//в масив sessions зберігається інформація про дату та час відвідування сторінки.
//Є ще сторінка sessions.html(назва довільна), при відвідуванні якої потрібно відмалювати
//всю інформацію про відвідування сторінки index.html.Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

const timeOfVisit = new Date();
const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push({ timeOfVisit });
localStorage.setItem('sessions', JSON.stringify(sessions));


//=========================
//зробити масив на 100 об'єктів та дві кнопки prev next
//при завантажені сторінки з'являються перші 10 об'єктів.
//При натисканні next виводяться настпні 10 об'єктів
//При натисканні prev виводяться попередні 10 об'єктів

const dataArr = Array.from({ length: 107 }, (_, ind) => `Element number ${++ind}`);

const divFor10Elem = document.createElement('div');
const buttonPrev = document.createElement('button');
const buttonNext = document.createElement('button');
buttonPrev.innerText = 'Prev';
buttonPrev.style.fontSize = '20px';
buttonNext.innerText = 'Next';
buttonNext.style.fontSize = '20px';

document.body.append(divFor10Elem, buttonPrev, buttonNext);

let firstElem = 0;

buttonNext.onclick = function () {
    if (firstElem <= dataArr.length - 20) { firstElem += 10 }
    else if ((dataArr.length - 10) > firstElem) { firstElem = dataArr.length - 10 };
    create10Elem(firstElem);
};

buttonPrev.onclick = function () {
    if (firstElem > 9) { firstElem -= 10 }
    else if (firstElem <= 9) { firstElem = 0 };
    create10Elem(firstElem);
};

create10Elem(firstElem);

function create10Elem(first) {
    divFor10Elem.innerHTML = ''
    const count = first + 10;
    for (first; first < count; first++) {
        const divForElem = document.createElement('div');
        divForElem.innerText = dataArr[first];
        divFor10Elem.appendChild(divForElem);
    };
};

//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, 
//зробіть так, щоб при натисканні на кнопку зникав елемент з id = "text".


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, 
//та повідомити про це користувача


//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)

//*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, 
//в середині якого є значення "100грн"
//при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається