const textArr = [
    "За", "допомогою", "циклу", "for", "і", "document.write()", "вивести", 10, "блоків", "div", "з", "довільним", "текстом", "всередині",
    "За", "допомогою", "циклу", "while", "вивести", "в", "документ", 20, "блоків", "h1", "з", "довільним", "текстом", "всередині."
];

//task 1

document.write(`<h1>Task 1</h1>`);

for (let i = 0; i < 10; i++){ document.write(`<div>${textArr[i]}</div>`) };

//task 2

document.write(`<h1>Task 2</h1>`);

for (let i = 0; i < 10; i++) { document.write(`<div>index=${i} Text= ${textArr[i]}</div>`) };

//task 3

document.write(`<h1>Task 3</h1>`);

let indForWhile = 0;
while (indForWhile < 20) {
    document.write(`<h3>${textArr[indForWhile]}</h3>`);
    indForWhile++;
};

//task 4

document.write(`<h1>Task 4</h1>`);

indForWhile = 0;
while (indForWhile < 20) {
    document.write(`<h3>index = ${indForWhile} text : ${textArr[indForWhile]}</h3>`);
    indForWhile++;
};

//task 5

document.write(`<h1>Task 5</h1>`);

const listOfItems = [ "html", "css", "javascript", "mysql", "mongodb", "react", "angular", "node.js" ];

document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++){
    document.write(`<li>${listOfItems[i]}</li>`)
};
document.write(`</ul>`)

//task 6

document.write(`<h1>Task 6</h1>`);

const products = [
  {
    title: "milk",
    price: 22,
    image:
      "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg",
  },
  {
    title: "juice",
    price: 27,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg",
  },
  {
    title: "tomato",
    price: 47,
    image:
      "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74",
  },
  {
    title: "tea",
    price: 15,
    image:
      "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png",
  },
];

for (elem of products) {
    document.write(`<div class="product-cart">
    <h3 class="product-title">${elem.title}. Prise - ${elem.price}</h3>
    <img src="${elem.image}" alt="" class="product-image">
    </div>`);
};


//task 7

document.write(`<h1>Task 7</h1>`);

const users = [
    { name: "vasya", age: 31, status: false },
    { name: "petya", age: 30, status: true },
    { name: "kolya", age: 29, status: true },
    { name: "olya", age: 28, status: false },
    { name: "max", age: 30, status: true },
    { name: "anya", age: 31, status: false },
    { name: "oleg", age: 28, status: false },
    { name: "andrey", age: 29, status: true },
    { name: "masha", age: 30, status: true },
    { name: "olya", age: 31, status: false },
    { name: "max", age: 31, status: true }
];

document.write(`<h2>Status: True</h2>`);
for (elem of users) {
    if(elem.status) document.write(`<h3>Name: ${elem.name}; age: ${elem.age}; status: ${elem.status}</h3>`);
};

document.write(`<h2>Status: False</h2>`);
for (elem of users) {
  if (!elem.status) document.write(`<h3>Name: ${elem.name}; age: ${elem.age}; status: ${elem.status}</h3>`);
};

document.write(`<h2>Age: more 30 </h2>`);
for (elem of users) {
  if (elem.age>30) document.write(`<h3>Name: ${elem.name}; age: ${elem.age}; status: ${elem.status}</h3>`);
};