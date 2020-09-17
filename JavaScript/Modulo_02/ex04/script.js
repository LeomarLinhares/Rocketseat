var nomes = ["Diego", "Gabriel", "Lucas"];

for (let index = 0; index < nomes.length; index++) {
var item = document.createElement('li');
item.textContent = nomes[index]
lista.appendChild(item);
}

function adicionar() {
    let addToList = document.querySelector('#campoDeEntrada');
    let lista = document.querySelector('#lista');
    lista.innerHTML = "";
    nomes.push(addToList.value);

    for (let index = 0; index < nomes.length; index++) {
        var item = document.createElement('li');
        item.textContent = nomes[index]
        lista.appendChild(item);
        }

    addToList.value = "";
}