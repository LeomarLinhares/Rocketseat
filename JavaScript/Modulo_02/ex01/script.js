function gerarQuadrado() {
    var divElement = document.createElement('div');
    divElement.setAttribute('id', 'quadrado')

    divElement.style.width = '100px';
    divElement.style.height = '100px';
    divElement.style.backgroundColor = '#f00'

    var place = document.querySelector('#container');
    place.appendChild(divElement);
}