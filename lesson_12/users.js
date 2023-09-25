// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
// (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів) отримана через додатковий запит(https://jsonplaceholder.typicode.com/users/XXX
// ХХХ - айді користувача)


fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const ulForUsers = document.createElement('ul');
        users.forEach(user => {
            const liForUser = document.createElement('li');
            const linkForUser = document.createElement('a');
            linkForUser.href = `user-details.html?id=${user.id}`;
            linkForUser.innerText = user.name;
            liForUser.innerText = `${user.id} - ${user.name} `;
            liForUser.appendChild(linkForUser);
            ulForUsers.appendChild(liForUser);
        }); 
        document.body.appendChild(ulForUsers);
    });

   