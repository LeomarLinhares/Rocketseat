var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function retorno() {
    console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.centro}, na rua "${endereco.rua}" com nº ${endereco.numero}`)
}

retorno()