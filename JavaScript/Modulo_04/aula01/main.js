// Este aparentemente é um método de se obter certas informações sem precisar
// dar reload em uma página.
// Entretanto, uma requisição demora mais tempo que a execução do código.

var xhr = new XMLHttpRequest();

// Pegar dados da api do GitHub
xhr.open('GET', 'https://api.github.com/users/LeomarLinhares');
xhr.send(null);

// O método GET vai pegar um JSON, mas o código vai ser muito rápido em milissegundos
// comparado com o tempo da requisição. Já que o código não vai esperar, para ver
// os dados no console, vai ser necessário pedir para que uma função o jogue para
// uma variável (acho).

xhr.onreadystatechange = function() {
    // O readyState ser estritamente igual a 4 significa que a resposta voltou.
    // Basicamente, estamos dizendo "Se tivemos resposta da api do GitHub, faça
    // isso)"
    if (xhr.readyState === 4) {
        // JSON.parse porque vamos receber um texto que vamos ter que converter
        // para um Objeto ou Vetor.
        console.log(JSON.parse(xhr.responseText))
    }
}

// AJAX é a principal forma de consumir informações do servidor pelo JavaScript

// Nas próximas aulas vamos usar biblioteca para ficar mais limpo.