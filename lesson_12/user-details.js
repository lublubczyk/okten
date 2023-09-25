const userId = new URLSearchParams(location.search).get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(userData => showData(userData));


function showData(userData) {
    const ulForUserData = document.createElement('ul');
    Object.keys(userData).forEach(key => {
        const liForUserData = document.createElement('li');
        if (typeof userData[key] === 'object') {
            liForUserData.innerText = key;
            liForUserData.appendChild(showData(userData[key]));
        } else {
            liForUserData.innerText = `${key} - ${userData[key]}`;
        };
        ulForUserData.appendChild(liForUserData);
    });
   return document.body.appendChild(ulForUserData);
};