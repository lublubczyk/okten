//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const areaRectangleArrow = (a, b) => a * b;

console.log(areaRectangleArrow(2, 3));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

const areaCircleArrow = (r) => +Math.PI.toFixed(2) * Math.pow(r, 2);

console.log(areaCircleArrow(2));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const areaCylinderArrow = (h, r) => 2 * +Math.PI.toFixed(2) * r * h + 2 * areaCircleArrow(r);

console.log(areaCylinderArrow(5, 1));

//- створити функцію яка приймає масив та виводить кожен його елемент

const arrLogArrow = (arr) => { for (elem of arr) console.log(elem) };

arrLogArrow([1, 4, 6, true, "Hello"]);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

const writeTextArrow = (text) => { document.write(`<p>${text}</p>`) };

writeTextArrow("Hello");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const write3LiArrow = (text) => {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) document.write(`<li>${text}</li>`);
    document.write("</ul>");
};

write3LiArrow("Hello li");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//Кількість li визначається другим аргументом, який є числовим(тут використовувати цикл)

const writeNLiArrow = (text, count) => {
    document.write("<ul>");
    for (let i = 1; i <= count; i++) document.write(`<li>${text} ${i} li</li>`);
    document.write("</ul>");
};

writeNLiArrow("Hello", 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const buildUlFromArr = (arr) => {
    document.write("<ul>");
    for (elem of arr) document.write(`<li>${elem}</li>`);
    document.write("</ul>");
};

buildUlFromArr(["Hello", "I'm", 39, "it's", true]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок.

const writeUserData = (arr) => {
    for (elem of arr) {
        document.write("<ul>");
        for (key in elem) document.write(`<li>${key} ${elem[key]}</li>`);
        document.write("</ul>");
    };
};

writeUserData([{ id: 1, name: "Ivan", age: 20 }, { id: 2, name: "Vova", age: 30 }]);

//- створити функцію яка повертає найменьше число з масиву

const minInArr = (arr) => {
    let minArr = arr[0];
    for (let i = 1; i < arr.length; i++) if (minArr > arr[i]) minArr = arr[i];
    return minArr;
};

console.log(minInArr([3, 34, 2, 564, -2, 3]));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sumOfArr = (arr) => {
    let sum = 0;
    for (elem of arr) sum += elem;
    return sum;
};

console.log(sumOfArr([1, 2, 10]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swapArr = (arr, index1, index2) => {
    const workArr = [...arr];
    const memory = workArr[index1];
    workArr[index1] = workArr[index2];
    workArr[index2] = memory;
    return workArr;
};

console.log(swapArr([11, 22, 33, 44], 3, 1));

// додаткова таска від Максима.
//не оголошуючи змінної, ( і без методів масиву... з методами ще можна трохи варіантів придумати...) )

const swapArr2 = (arr, index1, index2) => {
    const workArr = [...arr]; //створюємо тільки для того щоб не змінювати вхідні дані.
    workArr[index1] += workArr[index2];
    workArr[index2] = workArr[index1] - workArr[index2];
    workArr[index1] -= workArr[index2];
    return workArr;
};

console.log(swapArr2([11, 22, 33, 44], 0, 1));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let result = 0;
    for (elem of currencyValues) {
        if (elem.currency === exchangeCurrency) result = sumUAH / elem.value;
    };
    return result || "I can't exchange";
};

console.log(exchange(10000, [{ currency: "USD", value: 40 }, { currency: "EUR", value: 42 }], "USD"));
