//Encapsulamento

class ContaBancaria {
    constructor(
        public nome: string,
        private saldo: number
    ) { }
    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("Erro")
        } else {
            this.saldo += valor
            console.log(`${this.nome} depositou: ${valor} reais. Saldo atual: ${this.saldo} reais`)
        }
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Operação cancelada: saldo insuficiente")
        } else {
            this.saldo -= valor
            console.log(`${this.nome} sacou ${valor} reais. Saldo atual: ${this.saldo} reais`)

        }


    }
}


const cliente = new ContaBancaria("Tiago", 100)
cliente.depositar(50)
cliente.sacar(30)
cliente.sacar(150)
