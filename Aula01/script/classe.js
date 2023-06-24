"use strict";
class ContaBancaria {
    constructor() {
        this.saldo = 0;
    }
    getSaldo() {
        return this.saldo;
    }
    exibeSaldo() {
        return `Saldo atual R$ ${this.getSaldo().toFixed(2)}`;
    }
    depositar(pValor) {
        this.saldo += pValor;
    }
    sacar(pValor) {
        !(this.saldoDisponivel(pValor)) ? console.log(this.exibeSemSaldo()) : '';
        this.saldo = (this.saldo >= pValor) ? this.saldo -= pValor : this.saldo;
    }
    exibeSemSaldo() {
        return 'Saldo indisponível';
    }
    saldoDisponivel(pValor) {
        return (this.saldo >= pValor) ? true : false;
    }
}
var c = new ContaBancaria();
c.depositar(15);
c.sacar(10);
console.log(c.exibeSaldo());
