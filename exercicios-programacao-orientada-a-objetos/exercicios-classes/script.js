// const title = document.getElementById("title");
// const input = document.getElementById("input");
// const button = document.getElementById("button");

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     getFullPerson(){
//         console.log('Nome completo:', this.name, 'Idade:', this.age)
//     }
// }

// const usuarios = []

    
// const usuario1 = new Person('joao', 20)
// console.log(usuarios)

// usuarios.push(usuario1);

// usuario1.getFullPerson();


class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} está falando`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
}

const dog = new Animal('Bob');
const animal = new Animal('Rex');

dog.speak();
animal.speak();
