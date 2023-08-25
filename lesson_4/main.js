//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle(a, b) { return a * b };

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) { return +Math.PI.toFixed(2) * Math.pow(r, 2) };

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) { return h * 2 * +Math.PI.toFixed(2) * r; };
    
//- створити функцію яка приймає масив та виводить кожен його елемент

function arrLog(arr) { for (const elem of arr) console.log(elem) };

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function writeText(str) { (document.write(`<p>${str}</p>`)) };

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function writeUl(str) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) document.write(`<li>${str}</li>`);
    document.write('</ul>');
};

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//Кількість li визначається другим аргументом, який є числовим(тут використовувати цикл)

function writeMoreUl(str,num) {
    document.write('<ul>');
    for (let i = 0; i < num; i++) document.write(`<li>${str}</li>`);
    document.write('</ul>');
};

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function buildUlFromArr(arr) {
    document.write("<ul>");
    for (elem of arr) document.write(`<li>${elem}</li>`);
    document.write("</ul>");
}; 


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function writeObjFromArr(arr) {
    for (elem of arr) {
        document.write(`<ul>
            <li>id: ${elem.id}</li>
            <li>name: ${elem.name}</li>
            <li>age: ${elem.age}</li>
        </ul>`);
    };
};

//- створити функцію яка повертає найменьше число з масиву

function findMinInArr(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) if (min > arr[i]) min = arr[i] ;
    return min;
};


//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumArr(arr) {
    let sum = 0;
    for (elem of arr) sum = sum + elem;
    return sum;
};


//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swapArr(arr, index1, index2) {
    const workArr = [...arr];
    const memory = workArr[index1];
    workArr[index1] = workArr[index2];
    workArr[index2] = memory;
    return workArr;
};

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let result = 0;
    for (elem of currencyValues) {
        if (elem.currency === exchangeCurrency) return result = sumUAH / elem.value;
    };
    return "I can not exchange";
};



