
class Pessoa {
    constructor(
        public nome: string,
        private email: string
    ) {

    }

    apresentar(): string {
        const nome = this.nome
        const email = this.email
        return `nome: ${nome}, email: ${email}`
    }
}


const pessoa = new Pessoa("Tiago", "admin@admin.com")
console.log(pessoa.apresentar())







