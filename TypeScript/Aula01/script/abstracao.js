"use strict";
class ClasseAbstrata {
    constructor() {
        this.atributo3 = false;
    }
    setAttr3(pAttr3) {
        this.atributo3 = pAttr3;
    }
}
class Herdeira extends ClasseAbstrata {
    constructor() {
        super(...arguments);
        this.atributo1 = '';
        this.atributo2 = 0;
    }
    setAttr1(pValor) {
        this.atributo1 = pValor;
    }
    setAttr2() {
    }
    setAttr3(pAttr3) {
        this.atributo3 = pAttr3;
    }
    setValue(pValue) {
        this.valor = pValue;
    }
    getValor() {
        return '';
    }
}
class SegundaClasse extends ClasseAbstrata {
    constructor() {
        super(...arguments);
        this.atributo1 = '';
        this.atributo2 = 0;
    }
    setAttr1(pValor) {
        this.atributo1 = pValor;
    }
    setAttr2() {
    }
    getValor() {
        return '';
    }
}
