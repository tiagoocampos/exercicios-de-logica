//Classe básica

class Carro {
    constructor(
        public marca: string
    ) { }

    acelerar(): void {
        const marca = this.marca
        console.log(`O carro da marca ${marca} esta acelerando`)
    }
}

const carro = new Carro("Gol")
carro.acelerar()