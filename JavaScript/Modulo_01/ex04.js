function experiencia(anos) {
    if (anos < 0) {
        var res = "É impossível ter uma experiência negativa.";
    } else if (anos <= 1) {
        var res = "Iniciante";
    } else if (anos <= 3) {
        var res = "Intermediário";
    } else if (anos <= 6) {
        var res = "Avançado";
    } else {
        var res = "Jedi Master";
    }

    console.log(res)
}

var anosEstudo = 7;
experiencia(anosEstudo);