//Mais propriedades

class Aluno {
    constructor(
        public nome: string,
        public nota: number
    ) { }

    verificarAprovacao(): void {
        if (this.nota >= 7) {
            console.log(`O aluno ${this.nome} foi aprovado com a nota ${this.nota}`)
        } else if (this.nota <= 6 && this.nota >= 4) {
            console.log(`O aluno ${this.nome} ficou de recuperção com a nota ${this.nota}`)
        } else {
            console.log(`O aluno ${this.nome} foi reprovado com a nota ${this.nota} `)
        }
    }
}

const alunoAprovado = new Aluno("Tiago", 8);
const alunoRecuperacao = new Aluno("Jose", 6)
const alunoReprovado = new Aluno("Marcos", 3)

alunoAprovado.verificarAprovacao()
alunoRecuperacao.verificarAprovacao()
alunoReprovado.verificarAprovacao()