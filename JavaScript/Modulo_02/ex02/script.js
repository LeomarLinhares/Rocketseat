function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var newColor = getRandomColor();
var indexColor = 0;

function gerarQuadrado() {
    indexColor++;
    var divElement = document.createElement('div');
    divElement.setAttribute('id', 'quadrado' + indexColor)
    divElement.setAttribute('onmouseover', `changeColor(${indexColor})`)

    divElement.style.width = '100px';
    divElement.style.height = '100px';
    divElement.style.backgroundColor = '#f00';
    divElement.style.margin = '10px'

    var place = document.querySelector('#container');
    place.appendChild(divElement);
}

function changeColor(number) {
    var selDiv = document.querySelector(`#quadrado${number}`);
    selDiv.style.backgroundColor = `${getRandomColor()}`;
}