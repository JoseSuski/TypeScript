"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostraMsg = exports.Classe2ModuloI = exports.ClasseModuloI = void 0;
class ClasseModuloI {
    constructor() {
        this.Atributo1 = 5;
    }
}
exports.ClasseModuloI = ClasseModuloI;
class Classe2ModuloI {
    constructor() {
        this.atributoClasse2 = '';
    }
}
exports.Classe2ModuloI = Classe2ModuloI;
function mostraMsg() {
    console.log('Alo Mundo');
}
exports.mostraMsg = mostraMsg;
//export {ClasseModuloI}
