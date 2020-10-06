var user = '';

function getInfo(urlRepos) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${urlRepos}`);
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else if (xhr.status === 404) {
                    reject(404);
                } else {
                    reject('ReqError');
                }
            }
        }
    })
}

function searchRepos() {
    user = document.querySelector('#user').value;
    let urlRepos = `https://api.github.com/users/${user}/repos`;

    let section = document.querySelector('section');
    let ul = document.createElement('ul');
    section.appendChild(ul);
    let selUl = document.querySelector('ul');

    selUl.innerHTML = 'Obtendo informações...'

    if (user == '') {
        selUl.innerHTML = '';        
        alert('Preencha o campo com o nome de usuário para realizar a busca.');
    } else {
        getInfo(urlRepos)
            .then((res) => {
                selUl.innerHTML = '';
                document.querySelector('#user').value = '';
                res.forEach(element => {
                    let li = document.createElement('li');
                    li.innerHTML = element.name;
                    selUl.appendChild(li);
                });
            })
            .catch((error) => {
                if (error === 404) {
                    selUl.innerHTML = '';
                    console.warn('O usuário não existe');
                    selUl.innerHTML = `O usuário "${user}" não existe.`;
                    user = '';
                } else if (error === 'ReqError') {
                    console.warn('Erro de requisição')
                }
            });
    }
}