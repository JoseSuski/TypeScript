class Animal {
    public nome?: string
}

class Cachorro extends Animal {

    public emiteSom(): string {
        return 'Late'
    }
}

class Gato extends Animal {

    public emiteSom(): string {
        return 'Mia'
    }
}

class Pet {
    public som: Animal = new Animal()
}

console.log('Cão')
let cao = new Pet()
let ruidoCao = cao.som = new Cachorro
console.log(ruidoCao.emiteSom())

console.log('Gato')
let gato = new Pet()
let ruidoGato = gato.som = new Cachorro
console.log(ruidoGato.emiteSom())