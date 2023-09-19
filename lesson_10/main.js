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
    if (this.userName.value && this.userSurName.value && +this.userAge.value >= 0) {
        divUserData.innerText =
            `Name: ${this.userName.value}; 
             Password: ${this.userSurName.value}; 
             Age: ${this.userAge.value}`;
        divUserData.style.margin = '10px'
        divForUsersData.appendChild(divUserData);
    };
    this.reset();
};

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному
//перезавантажені сторінки буде додавати до неї + 1

const divForCounter = document.createElement('div');
const styleForCount = {
    width: '100px', backgroundColor: 'blue', margin: '10px',
    color: 'yellow', textAlign: 'center', fontSize: '50px'
};
Object.assign(divForCounter.style, styleForCount);

let counter = '1'
divForCounter.innerText = counter;

document.body.appendChild(divForCounter);

if (localStorage.getItem('counter') === null) {
    localStorage.setItem('counter',counter);
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
        divForElem.style.margin = '5px';
        divForElem.innerText = dataArr[first];
        divFor10Elem.appendChild(divForElem);
    };
};

//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
//зробіть так, щоб при натисканні на кнопку зникав елемент з id = "text".

const hidenElement = document.createElement('div');
const hidenButton = document.createElement('button');
const divForButton = document.createElement('div');

hidenButton.innerText = 'Hide';
hidenElement.setAttribute('id', 'text');

const styleVal = {
    element: { width: '300px', height: '200px', backgroundColor: '#FF7F50',margin: '10px' },
    button: { fontSize: '30px', width: '100px', margin:'10px' }
};

Object.assign(hidenElement.style, styleVal.element);
Object.assign(hidenButton.style, styleVal.button);

divForButton.appendChild(hidenButton);
document.body.append(divForButton, hidenElement);

hidenButton.addEventListener('click', function () {
    const hidElement = document.getElementById('text');
    if (hidElement.style.display === 'none') {
        hidElement.style.display = 'block';
        this.innerText = 'Hide';
    } else {
        hidElement.style.display = 'none';
        this.innerText = 'Show';
    };
});

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//та повідомити про це користувача

const formForAge = document.createElement('form');
const inputForFormAge = document.createElement('input');
const buttonForFormAge = document.createElement('button');
const atributeArray = [['type', 'number'], ['name', 'userAge'], ['placeholder', 'your age']];

atributeArray.forEach(val => inputForFormAge.setAttribute(val[0], val[1]));
formForAge.setAttribute('id', 'check');
formForAge.setAttribute('action', '');
buttonForFormAge.innerText = 'Check';

formForAge.append(inputForFormAge, buttonForFormAge);
document.body.appendChild(formForAge);

const checkAge = document.querySelector('#check');
const anver = document.createElement('h3');
document.body.appendChild(anver);

checkAge.onsubmit = function (event) {
    event.preventDefault();
    if (+this.userAge.value > 0) {
        anver.innerText = +this.userAge.value > 17 ? 'Adult' : 'Baby';
    } else anver.innerText = '';
    this.reset();
};

//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)

const inputForRow = document.createElement('input');
const inputForColumn = document.createElement('input');
const inputForText = document.createElement('input');
const buttonForSet = document.createElement('button');
const formForSetValue = document.createElement('form');
buttonForSet.innerText = 'Set params';

const attrObjSet = {
    formForSet: [['action', ''], ['id', 'setSittings']],
    inpRow: [['type', 'number'], ['name', 'userNumRow'], ['placeholder', 'set num of row']],
    inpCol: [['type', 'number'], ['name', 'userNumCol'], ['placeholder', 'set num of col']],
    inpText: [['type', 'text'], ['name', 'userText'], ['placeholder', 'set text']],
};

attrObjSet.formForSet.forEach(value => formForSetValue.setAttribute(value[0], value[1]));
attrObjSet.inpRow.forEach(value => inputForRow.setAttribute(value[0], value[1]));
attrObjSet.inpCol.forEach(value => inputForColumn.setAttribute(value[0], value[1]));
attrObjSet.inpText.forEach(value => inputForText.setAttribute(value[0], value[1]));

formForSetValue.append(inputForRow, inputForColumn, inputForText, buttonForSet);
document.body.appendChild(formForSetValue);

const getSettings = document.getElementById('setSittings');
const divConteiner = document.createElement('div');
document.body.appendChild(divConteiner);

getSettings.onsubmit = function (event) {
    event.preventDefault();
    const rowNum = +this.userNumRow.value;
    const colNum = +this.userNumCol.value;
    const setText = this.userText.value;
    if (rowNum > 0 && colNum > 0 && setText) {
        const styleObj = {
            width: 90 / colNum + '%',
            float: 'left',
            backgroundColor: '#B22222',
            'margin-right': 5 / colNum + '%',
            'margin-left': 5 / colNum + '%,',
            'margin-top': '5px',
            'margin-bottom': '5px',
            fontSize: '20px',
            textAlign: 'center',
        };
        divConteiner.innerHTML = '';
        for (let i = 0; i < colNum * rowNum; i++) {
            const elem = document.createElement('div');
            Object.assign(elem.style, styleObj);
            elem.innerText = setText;
            divConteiner.appendChild(elem);
        };
    };
    this.reset();
};

//*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
//в середині якого є значення "100грн"
//при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const divForMakeMoney = document.createElement('div');
const time = timeOfVisit.getTime();
const styleDivMoney = {
    width: '300px', backgroundColor: 'yellow', margin: '10px',
    color: 'blue', textAlign: 'center', fontSize: '50px', clear: 'both'
};
Object.assign(divForMakeMoney.style, styleDivMoney);

document.body.appendChild(divForMakeMoney);

if (localStorage.getItem('time') === null) {
    divForMakeMoney.innerText = '100гр';
    localStorage.setItem('time', time.toString());
    localStorage.setItem('money', '100'); 
} else if ((time - +localStorage.getItem('time')) > 10000) {
    const money = +localStorage.getItem('money') + 10;
    divForMakeMoney.innerText = money + 'гр';
    localStorage.setItem('money', money.toString());
    localStorage.setItem('time', time.toString());
} else {
    divForMakeMoney.innerText = localStorage.getItem('money') + 'гр';
    localStorage.setItem('time', time.toString());
};
