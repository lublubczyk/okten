//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function createId() {
    let newId = Math.floor(Math.random() * 10000000).toString();
    if (newId.length < 7) newId = createId();
    return newId;
};
console.log(createId instanceof Function)
const people = [
    { name: "Ivan", surname: "Petrenko" },
    { name: "Petro", surname: "Ivanenko" },
    { name: "Maria", surname: "Kovalenko" },
    { name: "Olena", surname: "Sidorov" },
    { name: "Andriy", surname: "Melnik" },
    { name: "Sergiy", surname: "Shevchenko" },
    { name: "Kateryna", surname: "Koval" },
    { name: "Natalia", surname: "Soloviy" },
    { name: "Oksana", surname: "Boyko" },
    { name: "Taras", surname: "Zaytsev" },
];

function User(id, name, surname) {
    this.id = id();
    this.name = name;
    this.surname = surname;
    this.email = this.name.toLowerCase() + this.surname + '@ukr.net';
    this.phone = '+38067' + this.id;
};

const usersArr = people.map(val => new User(createId, val['name'], val['surname']));

console.log(usersArr);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const evenId = usersArr.filter(val => +val.id%2 ===0);

console.log(evenId); 

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortedId = usersArr.toSorted((val, nextVal) => +val.id - +nextVal.id);

console.log(sortedId);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

function createOrder() {
    const products = ["Phone", "Laptop", "Tablet", "Smartwatch", "Headphones", "Keyboard", "Mouse", "Monitor", "Printer",
        "Camera", "Backpack", "T-shirt", "Jeans", "Sneakers", "Sweater", "Shorts", "Jacket", "Socks", "Hat", "Sunglasses"];
    const result = [];
    let counter = Math.floor(Math.random() * 20);
    for (let i = 0; i <= counter; i++) { result.push(products[Math.floor(Math.random() * 20)]) };
    return result;
};


class Client {
    constructor(id, name, surname, order) {
        this.id = id();
        this.name = name;
        this.surname = surname;
        this.email = name.toLowerCase() + surname + '@gmail.com';
        this.phone = '+38063' + id();
        this.order = order();
    };
};

//створити пустий масив, наповнити його 10 об'єктами Client

const clientsArr = people.map(val => new Client(createId, val['name'], val['surname'], createOrder));

console.log(clientsArr);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedClientOrder = clientsArr.toSorted((val, nextVal) => val.order.length - nextVal.order.length);

console.log(sortedClientOrder);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//    -- changeYear (newValue) - змінює рік випуску на значення newValue
//    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,producer,year,maxSpeed,motorCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpead = maxSpeed;
    this.motorCapacity = motorCapacity;
    this.drive = function () { document.write(`<span>Їдемо зі швидкістю ${this.maxSpead} на годину</span>`) };
    this.increaseMaxSpeed = function (newSpeed) { this.maxSpead += newSpeed };
    this.changeYear = function (newYear) { this.year = newYear };
    this.addDriver = function (driver) { this.driver = driver };
    this.info = function () {
        Object.keys(this).forEach(val => {
            if (!(this[val] instanceof Object)) document.write(`<li>${val} - ${this[val]}</li>`);
        });
    };
};
const driver = { name: "Ivan", experience: 10 };
const car = new Car('Mers', 'Germany', 2020, 250, 4000);
car.drive();
car.increaseMaxSpeed(20);
car.changeYear(2022);
car.addDriver(driver);
car.info();
console.log(car);

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, 
// об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   -- changeYear (newValue) - змінює рік випуску на значення newValue
//    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
document.write('<span>---------</span><br>');

class SecondCar extends Car { constructor(...rest) { super(...rest) } };

const secondCar = new SecondCar('Audi', 'Germany', 2019, 260, 3500);
secondCar.drive()
secondCar.addDriver({ name: 'Olga', experience: 2 });
secondCar.info()
console.log(secondCar);


class ThirdCar {
    constructor(model, producer, year, maxSpeed, motorCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpead = maxSpeed;
        this.motorCapacity = motorCapacity;
    };
    drive() { document.write(`<span>Їдемо зі швидкістю ${this.maxSpead} на годину</span>`) };
    increaseMaxSpeed(newSpeed) { this.maxSpead += newSpeed };
    changeYear(newYear) { this.year = newYear };
    addDriver(driver) { this.driver = driver };
    info() {
        Object.keys(this).forEach(val => {
            if (!(this[val] instanceof Object)) document.write(`<li>${val} - ${this[val]}</li>`);
        });
    };
};

document.write("<span>---------</span><br>");

const thirdCar = new ThirdCar('Toyota', 'Japan', 2021, 230, 3000);

thirdCar.drive();
thirdCar.increaseMaxSpeed(20);
thirdCar.changeYear(2022);
thirdCar.addDriver(driver);
thirdCar.info();
console.log(thirdCar);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const girlNames = ["Emily", "Sophia", "Olivia", "Ava", "Mia", "Isabella", "Charlotte", "Amelia", "Harper", "Evelyn"];

class Cinderella{
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
};

class Prince {
    constructor(name,age,shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    };
    pickUpPrincess(arrCinderella) {
        arrCinderella.forEach(val => {
            if (val.footSize === this.shoeSize) {
                document.write(`<h2>My princess is ${val.name} age: ${val.age} foot size is ${val.footSize}</h2>`);
            };
        });
    };
    findMyWife(arrCinderella) {
        const myWife = arrCinderella.find(val => val.footSize === this.shoeSize);
        document.write(`<h2>Finded my wife is ${myWife.name} she have ${myWife.age} year</h2>`);
    };
};

const cinderellasArr = girlNames.map((val, ind) => new Cinderella(val, ind + 18, ind + 34));
const prince = new Prince('Matviy', 30, 38);

prince.pickUpPrincess(cinderellasArr);
prince.findMyWife(cinderellasArr);

