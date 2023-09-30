// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  
// на сторінку user - details.html, котра має детальну інфорацію про об'єкт на який клікнули

const mainBox = document.querySelector('main');

fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => {
        if (!value.ok) throw new Error('Data false');
        return value.json();
    })
    .then(users => showUsers(users))
    .catch(error => mainBox.innerHTML = `<h2>${error}</h2>`)
    .finally(() => footerContent());



function showUsers(users) {
    users.forEach(user => {
        const { id, name } = user;
        mainBox.appendChild(createDivForUser(id, name)); 
    });
};

function createDivForUser(id, name) {
    const divForUser = document.createElement('div');
    const linkButton = createButtonForDiv(id, name);
    divForUser.innerHTML = `<h2>${name} - ID ${id}</h2>`;
    divForUser.appendChild(linkButton);
    return divForUser;
};

function createButtonForDiv(id, name) {
    const linkButton = document.createElement('button');
    linkButton.innerText = `View ${name} data`;
    linkButton.onclick = () => location.href = `../user-details/index.html?userId=${id}`;
    return linkButton;
};

function footerContent() {
    const footerBox = document.querySelector('footer');
    if (mainBox.childElementCount < 10) {
        footerBox.style.backgroundColor = 'red';
        footerBox.innerHTML = '<h2>Щось пішло не так...)</h2>'
    } else {
        footerBox.innerHTML = '<h2>Все відпрацювало ЧУДОВО!!!</h2>'
    };
};
