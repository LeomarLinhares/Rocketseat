function temHabilidade(skills) {
    var verificarJS = skills.indexOf("Javascript")
    if (verificarJS == -1) {
        console.log('false')
    } else {
        console.log('true')
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];


temHabilidade(skills); // true ou false