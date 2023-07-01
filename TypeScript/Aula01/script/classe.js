"use strict";
class ContaBancaria {
    constructor() {
        this.saldo = 0;
    }
    getSaldo() {
        return this.saldo;
    }
    exibeSaldo() {
        document.getElementById('retorno').innerHTML =
            `Saldo atual ${this.getSaldo().toFixed(2)}`;
        return `Saldo atual R$ ${this.getSaldo().toFixed(2)}`;
    }
    depositar(pValor) {
        let resposta = document.getElementById('retorno');
        this.saldo += pValor;
        resposta.innerHTML = `Depósito de R$ ${pValor.toFixed(2)} efetuado com sucesso`;
    }
    sacar(pValor) {
        let resposta = document.getElementById('retorno');
        !(this.saldoDisponivel(pValor))
            ? resposta.innerHTML = this.exibeSemSaldo()
            : resposta.innerHTML = `Saque de R$ ${pValor.toFixed(2)} efetuado com sucesso`;
        this.saldo = (this.saldo >= pValor) ? this.saldo -= pValor : this.saldo;
    }
    exibeSemSaldo() {
        return 'Saldo indisponível';
    }
    saldoDisponivel(pValor) {
        return (this.saldo >= pValor) ? true : false;
    }
}
class Corrente extends ContaBancaria {
}
var c = new ContaBancaria();
