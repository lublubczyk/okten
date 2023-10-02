// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів 
// поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку 
// post - details.html, котра має детальну інфу про поточний пост.

const userId = new URLSearchParams(location.search).get('userId');
const mainBox = document.querySelector('main');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => {
        if (!value.ok) throw new Error('User data false')
        return value.json()
    })
    .then(userData => {
        showData(userData);
        mainBox.appendChild(createButtonForPosts());
    })
    .catch(error => mainBox.innerHTML = `<h2>${error}</h2>`)
    .finally(() => footerContent());
    
    
function showData(userData) {
    const ulForUserData = document.createElement('ul');
    Object.keys(userData).forEach(key => {
        const liForUserData = document.createElement('li');
        if (typeof userData[key] === 'object') {
            liForUserData.innerText = key[0].toUpperCase() + key.slice(1);
            liForUserData.appendChild(showData(userData[key]));
        } else {
            liForUserData.innerText = `${key[0].toUpperCase()}${key.slice(1)} - ${userData[key]}`;
        };
        ulForUserData.appendChild(liForUserData);
    });
   return mainBox.appendChild(ulForUserData);
};


function createButtonForPosts() {
    const divForPosts = document.createElement('div');
    const shareButton = document.createElement('button');
    shareButton.innerText = 'Share all posts of the User';
    shareButton.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => {
                if (!res.ok) throw new Error('Posts data false');
                return res.json()
            })
            .then(array => createPostTitle(array, divForPosts, shareButton))
            .catch(error => mainBox.innerHTML = `<h2>${error}</h2>`)
            .finally(() => footerContent());
    };
    return shareButton;
};
      
function createPostTitle(array, divForPosts,shareButton) {
    if (divForPosts.childElementCount === 0) {
        shareButton.innerText = 'Hide all posts of the User'
        array.forEach(value => {
            const { title } = value;
            const divForUserPost = document.createElement('div');
            divForUserPost.innerHTML = `<h3>${title}</h3`;
            divForUserPost.appendChild(createCommentsButton(value));
            divForPosts.appendChild(divForUserPost);
        });
        mainBox.appendChild(divForPosts);
    } else {
        divForPosts.innerHTML = '';
        shareButton.innerText = 'Share all posts of the User';
    };
    return divForPosts;
};

function createCommentsButton(value) {
    const commentsButton = document.createElement('button');
    commentsButton.innerText = 'View comments';
    commentsButton.onclick = () => {
        localStorage.setItem('postDetails', JSON.stringify(value));
        location.href = '../post-details/index.html';
    };
    return commentsButton;
};

function footerContent() {
    const footerBox = document.querySelector('footer');
    if (mainBox.childElementCount === 1) {
        footerBox.style.backgroundColor = 'red';
        footerBox.innerHTML = '<h2>Щось пішло не так...)</h2>';
    } else {
        footerBox.innerHTML = '<h2>Все відпрацювало ЧУДОВО!!!</h2>';
    };
};