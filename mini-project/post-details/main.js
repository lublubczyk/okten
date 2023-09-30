// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста 
// (ендпоінт - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postValue = JSON.parse(localStorage.getItem('postDetails'));
const mainBox = document.querySelector('main');
const ulForData = document.createElement('ul');
let corectNameId = 'PostId - ';

createLiForUl(postValue, ulForData, corectNameId);

mainBox.appendChild(ulForData);
const divForComments = document.createElement('div');

fetch(`https://jsonplaceholder.typicode.com/posts/${postValue.id}/comments`)
    .then(value => {
        if (!value.ok) throw new Error('Comments data false');
        return value.json();
    })
    .then(postComments => createPostComments(postComments, divForComments))
    .catch(error => mainBox.innerHTML = `<h2>${error}</h2>`)
    .finally(() => footerContent());
      

function createPostComments(postComments,divForComments) {
    postComments.forEach(data => {
        const divForUl = document.createElement('div');
        const ulForData = document.createElement('ul');
        corectNameId = 'CommentId - ';
        createLiForUl(data, ulForData, corectNameId);
        divForUl.appendChild(ulForData);
        divForComments.appendChild(divForUl);
    })
    mainBox.appendChild(divForComments);
}

function createLiForUl(postValue,ulForData,corectNameId) {
    Object.keys(postValue).forEach(key => {
        const liForData = document.createElement('li');
        let inText = key[0].toUpperCase() + key.slice(1) + ' - ' + postValue[key]
        if (key === 'id') inText = corectNameId + postValue[key] ;
        liForData.innerText = inText;
        ulForData.appendChild(liForData);
    });
}    

function footerContent() {
    const footerBox = document.querySelector('footer');
    if (mainBox.childElementCount === 1) {
        footerBox.style.backgroundColor = 'red';
        footerBox.innerHTML = '<h2>Щось пішло не так...)</h2>'
    } else {
        footerBox.innerHTML = '<h2>Все відпрацювало ЧУДОВО!!!</h2>'
    };
};    