// Antes de usar bibliotecas, vamos entender o conceito de promises.
// Promises retornam o resultado (seja de sucesso ou erro) só depois de um tempo

var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/LeomarLinhares');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            // Se eu tiver resposta (código 4) eu vou conferir o seguinte:
            if (xhr.readyState === 4) {
                // Se tudo correr bem (código 200), eu vou retornar o resolve para
                // a promise. Entretanto, se der ruim, eu vou retornar o reject.
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    // O resolve invoca o then caso haja, mas o método then pede a função do resolve
    // que é encaixada como resposta (response), e já que está sendo passada para
    // uma função, podemos tratar da maneira que for necessária.
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })