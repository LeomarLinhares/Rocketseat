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
                } else {
                    reject('Erro na requisição');
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
            console.warn(error)
        });
}