// arrays and objects

const personalDataArr = ['My', 'name', 'is', 'Oleg', 'I', 'am', 30, 'it', 'is', true];
console.log(personalDataArr[0]); 
console.log(personalDataArr[1]); 
console.log(personalDataArr[2]); 
console.log(personalDataArr[3]); 
console.log(personalDataArr[4]); 
console.log(personalDataArr[5]); 
console.log(personalDataArr[6]); 
console.log(personalDataArr[7]); 
console.log(personalDataArr[8]); 
console.log(personalDataArr[9]); 


const bookObj1 = { title: 'JavaScript for children', pageCount: 367, gente: 'Programing' };
const bookObj2 = { title: 'Mind of the Slayer', pageCount: 394, gente: 'Detective' };
const bookObj3 = { title: 'Memories of him', pageCount: 360, gente: 'Novel' };



const bookObjWhithAuthor1 = new Object(bookObj1);
bookObjWhithAuthor1.authors = [{ name: 'Nick Morgan' }, { age: 70 }];
console.log(bookObjWhithAuthor1);

const bookObjWhithAuthor2 = new Object(bookObj2);
bookObjWhithAuthor2.authors = [{ name: "MIke Omer" }, { age: 43 }];
console.log(bookObjWhithAuthor2);

const bookObjWhithAuthor3 = new Object(bookObj3);
bookObjWhithAuthor3.authors = [{ name: "Colleen Hoover" }, { age: 43 }];
console.log(bookObjWhithAuthor3);

const usersArr = [
  { name: "Ivan", userName: "BestIvan", password: "dsznfg" },
  { name: "Oleg", userName: "oleg123", password: "kuyfghy" },
  { name: "Olga", userName: "olga87", password: "kjdsrger" },
  { name: "Lubov", userName: "Luba98", password: "sjhfghj" },
  { name: "Maria", userName: "mmm999", password: "fgkjhgf" },
  { name: "Mike", userName: "misha1", password: "lfjjhggr" },
  { name: "Iura", userName: "iyri2000", password: "ajdjuy" },
  { name: "Myron", userName: "mr2003", password: "dhfglqq" },
  { name: "Volodymyr", userName: "vol35", password: "loif" },
  { name: "Petro", userName: "petia27", password: "drghqq" },
];
console.log(usersArr[0].password);
console.log(usersArr[1].password);
console.log(usersArr[2].password);
console.log(usersArr[3].password);
console.log(usersArr[4].password);
console.log(usersArr[5].password);
console.log(usersArr[6].password);
console.log(usersArr[7].password);
console.log(usersArr[8].password);
console.log(usersArr[9].password);

// Логічні розгалуження

const x = prompt('Ведіть будь-яке число');
x !== '' && x == 0 ? console.log('Вірно') : console.log('Невірно');

let time = prompt('Введіть число від 0 до 59');
if (time !== '' && time !== null && 0 <= +time && +time < 60) {
    time = +time;
    if (0 <= time && time < 15) console.log('Перша чверть години');
    if (15 <= time && time < 30) console.log('Друга чверть години');
    if (30 <= time && time < 45) console.log('Третя чверть години');
    if (45 <= time) console.log('Четверта чверть години');
} else { console.log('Ви ввели не коректне число') };


let day = prompt('Введіть день місяця від 1 до 31');
if (day !== '' && day !== null && 0 < +day && +day < 32) {
    day = +day;
    if (0 < day && day < 11) console.log('Перша декада місяця');
    if (11 <= day && day < 21) console.log('Друга декада місяця');
    if (21 <= day && day <= 31) console.log('Тртетя декада місяця');
} else { console.log('Ви ввели не коректне число') };

let dayOfWeek = prompt('Введіть порядковий номер дня тижня 0-7');
if (dayOfWeek !== '' && dayOfWeek !== null && 0 < +dayOfWeek && +dayOfWeek < 8) {
    dayOfWeek = +dayOfWeek;
    switch (dayOfWeek) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Sunday");
    }
} else console.log("Ви ввели не коректне число");  


const firstUserNum = +prompt('Введіть перше число') || 100;
const secondUserNum = +prompt('Введіть друге число') || 50;
firstUserNum === secondUserNum ? console.log('Числа рівні') :
    firstUserNum < secondUserNum ? console.log('Друге число більше') : console.log('Перше число більше');  


// xxx !== (Array || Object )  В умові про них не згадувалось... якшо потрібно врахувати це відпишіть я перероблю. Дякую.  

let xxx = prompt('Введіть змінну xxx: число або текст') || 'default';
+xxx ? console.log('Ви ввели число') :
    xxx !== 'default' ? console.log('Ви ввели string') : console.log('Ваше введення не коректне');  



const coursesAndDurationArray = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 },
];
if (coursesAndDurationArray[0].monthDuration > 5) console.log('Супер');
if (coursesAndDurationArray[1].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[2].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[3].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[4].monthDuration > 5) console.log("Супер");
if (coursesAndDurationArray[5].monthDuration > 5) console.log("Супер");    


let xxx2 = [];
if (xxx2 === false || xxx2 === NaN || xxx2 === '' || xxx2 === null || xxx2 === undefined || xxx2 === 0) {
    xxx2 = "default";
    console.log(xxx2);
} else console.log(xxx2);














