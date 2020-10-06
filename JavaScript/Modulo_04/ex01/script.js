function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if (idade >= 18) {
            resolve('Maior de 18')
        } else {
            reject('Menor de 18')
        }
    })
}

checaIdade(20)
    .then(function(resposta) {
        console.log(resposta);
    })
    .catch(function(error) {
        console.log(error);
    });
