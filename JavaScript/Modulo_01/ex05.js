var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function mostrarHabilidades(listaDeUsuarios) {
    for (let index = 0; index < listaDeUsuarios.length; index++) {
        var arrayObjeto = listaDeUsuarios[index].habilidades;
        
        console.log(`O ${listaDeUsuarios[index].nome} possuí as habilidades: ${arrayObjeto.join(', ')}`)
    }
}

mostrarHabilidades(usuarios);