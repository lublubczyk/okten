//- Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'

const arrOfStr = ["hello world", "lorem ipsum", "javascript is cool"];
arrOfStr.forEach(val => console.log(val.length));

//- Перевести до великого регістру наступні стрінгові значення
//     'hello world', 'lorem ipsum', 'javascript is cool'

const arrOfStrUper = arrOfStr.map(val => {
    const uperVal = val.toUpperCase();
    console.log(uperVal);
    return uperVal;
});

//- Перевести до нижнього регістру настипні стрінгові значення
//      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL

const arrOfStrLover = arrOfStrUper.map(val => {
    const loverVal = val.toLowerCase();
    console.log(loverVal);
    return loverVal;
});

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const str = " dirty string   ";
const cleanStr = str.trim();
console.log([cleanStr]);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = str => str.split(' ');
console.log(stringToArray("Ревуть воли як ясла повні"));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const valToStr = arr => arr.map(val => val.toString());
console.log(valToStr([10, 8, -7, 55, 987, -1011, 0, 1050, 0]));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]

const sortNums = (numArr, direction) => {
    return direction === "ascending" ? numArr.toSorted((a, b) => a - b) : numArr.toSorted((a, b) => b - a);
};
console.log(sortNums([11, 21, 3], "descending"));
 
//==========================
//- є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    { title: 'Frontend', monthDuration: 4 }
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const sortByDuretion = coursesAndDurationArray.toSorted((val1, val2) => val1.monthDuration - val2.monthDuration);

console.log(sortByDuretion);

const more5Mounth = coursesAndDurationArray.filter(val => val.monthDuration > 5);

console.log(more5Mounth);

const plusId = coursesAndDurationArray.map((val, index) => {
    val.id = index + +Math.random().toFixed(3);
    return val;
});

console.log(plusId);


// =========================
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}

const allCards36 = create36Cards();

const findAceSpade = allCards36.find(val => val.cardSuit === 'spade' && val.value === 'ace');

console.log(findAceSpade);

const findAll6 = allCards36.filter(val => val.value === '6');

console.log(findAll6);

const findAllRed = allCards36.filter(val => val.color === 'red');

console.log(findAllRed);

const findAllDiamond = allCards36.filter(val => val.cardSuit === 'diamond');

console.log(findAllDiamond);

const findAllClubsMore9 = allCards36.filter(val => val.cardSuit === 'clubs' && (+val.value >= 9 || !+val.value));

console.log(findAllClubsMore9);




function create36Cards() {
    const valCards = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
    const arr4Suit = valCards.reduce((acum, elem) => {
        acum[0].push({ cardSuit: 'spade', value: elem, color: 'black' });
        acum[1].push({ cardSuit: 'clubs', value: elem, color: 'black' });
        acum[2].push({ cardSuit: 'diamond', value: elem, color: 'red' });
        acum[3].push({ cardSuit: 'heart', value: elem, color: 'red' });
        return acum;
    }, [[], [], [], []]);
    return arr4Suit[0].concat(arr4Suit[1]).concat(arr4Suit[2]).concat(arr4Suit[3]);
};



//=========================

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//    diamonds:[],
//    hearts:[],
//    clubs:[]
//}

const sortOfSuit = allCards36.reduce((acum, val) => {
    if (val.cardSuit === 'spade') acum.spades.push(val);
    if (val.cardSuit === 'clubs') acum.clubs.push(val);
    if (val.cardSuit === 'diamond') acum.diamonds.push(val);
    if (val.cardSuit === 'heart') acum.heards.push(val);
    return acum;
}, { spades: [], clubs: [], diamonds: [], heards: [] });

console.log(sortOfSuit);

//=========================
//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker

const coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
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
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];


const findCoursesWhithSass = coursesArray.filter(val =>  val.modules.find(val => val === 'sass') );

console.log(findCoursesWhithSass);

const findCoursesWhithDocker = coursesArray.filter((val) => val.modules.find((val) => val === 'docker'));

console.log(findCoursesWhithDocker);


// 

function create36Cards2() {
    const valCards = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
    const arr4Suit = valCards.reduce((acum, value) => {
        acum.push(
            { cardSuit: "spade", value, color: "black" },
            { cardSuit: "clubs", value, color: "black" },
            { cardSuit: "diamond", value, color: "red" },
            { cardSuit: "heart", value, color: "red" }
        );
        return acum;  
    }, []);
    return arr4Suit;
};

function create36Cards3() {
    const valCards = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
    const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
    const arr4Suit = valCards.reduce((acum, value) => {
        cardSuit.forEach(cardSuit => {
            cardSuit === "spade" || cardSuit === "clubs"
                ? acum.push({ cardSuit, value, color: "red" })
                : acum.push({ cardSuit, value, color: "black" });
        });
    return acum;  
    }, []);
    return arr4Suit;
};


console.log(create36Cards3());