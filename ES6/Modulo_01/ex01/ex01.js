class User {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha
    }

    isAdmin() {
        if (this.admin == true) {
            return true
        } else {
            return false
        }
    }
}

class Admin extends User {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new User('leomarlinhares@gmail.com', '5515080');
const Admin1 = new Admin('patrao@gmail.com', 'chefao');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());