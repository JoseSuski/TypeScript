"use strict";
class Animal {
}
class Cachorro extends Animal {
    emiteSom() {
        return 'Late';
    }
}
class Gato extends Animal {
    emiteSom() {
        return 'Mia';
    }
}
class Pet {
    constructor() {
        this.som = new Animal();
    }
}
console.log('Cão');
let cao = new Pet();
let ruidoCao = cao.som = new Cachorro;
console.log(ruidoCao.emiteSom());
console.log('Gato');
let gato = new Pet();
let ruidoGato = gato.som = new Cachorro;
console.log(ruidoGato.emiteSom());
