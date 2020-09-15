var nomes = ["Diego", "Gabriel", "Lucas"];

var lista = document.querySelector('#lista');

for (let index = 0; index < nomes.length; index++) {
    var item = document.createElement('li');
    item.textContent = nomes[index]
    lista.appendChild(item);
}

