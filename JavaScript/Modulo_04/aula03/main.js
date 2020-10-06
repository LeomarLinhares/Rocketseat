// A Biblioteca Axios faz o encapsulamento do HTTPRequest baseado em Promise,
// daí o código da aula anterior fica assim:
axios.get('https://api.github.com/users/LeomarLinhares')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })

    // izi dms