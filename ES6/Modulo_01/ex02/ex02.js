const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 - Utilizando o map
var idades = usuarios.map((item) => {
    return item.idade
});

console.log(`Resposta de 2.1:
${idades}`);
console.log('------------------')

// 2.2 - Utilizando o filter
var maioresDe18 = usuarios.filter(item => {
    return item.idade > 18
})

console.log(`Resposta de 2.2:
${maioresDe18}`)
console.log('------------------')

// 2.3 - Utilizando o find
var trabalhaNaGoogle = usuarios.find(item => {
    return item.empresa == 'Google'
})

console.log(`Resposta de 2.3:
${trabalhaNaGoogle}`)
console.log('------------------')

// 2.4 Unindo operações
filterUsuariosVezes2 = () => {
    usuarios.map(item => {
        item.idade *= 2
    })

    let newArr = usuarios;
    let filtered = newArr.filter(item => {
        return item.idade <= 50
    })
    return filtered
}

var res = filterUsuariosVezes2()

console.log(res)