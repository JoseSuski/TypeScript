"use strict";
class Prod {
    constructor(pCod, pDescricao, pValor, pQuantidade) {
        this.cod = pCod;
        this.descricao = pDescricao;
        this.valor = pValor;
        this.controlaEstoque = true;
        this.quantidade = pQuantidade;
    }
    setDescricao(pValor) {
        this.descricao = pValor;
    }
    setValor(pValor) {
        this.valor = pValor;
    }
    getCodigo() {
        return this.cod;
    }
    getDescricao() {
        return this.descricao;
    }
    getValor() {
        return this.valor;
    }
    getControlaEstoque() {
        return false;
    }
    getQuantidade() {
        return 100;
    }
    quantidadeProdutos() {
        document.getElementById('qtdProduto').innerHTML = `${this.getQuantidade}`;
        console.log(`${this.getQuantidade}`);
        return `${this.getQuantidade}`;
    }
}
class Servico {
    constructor(pCod, pDescricao, pValor) {
        this.cod = pCod;
        this.descricao = pDescricao;
        this.valor = pValor;
        this.controlaEstoque = false;
    }
    setDescricao(pValor) {
        this.descricao = pValor;
    }
    setValor(pValor) {
        this.valor = pValor;
    }
    getCodigo() {
        return this.cod;
    }
    getDescricao() {
        return this.descricao;
    }
    getValor() {
        return this.valor;
    }
    getControlaEstoque() {
        return false;
    }
}
//console.log('===========================================================================================')
//
//let p = new Prod(1, 'Mouse', 35.90)
//console.log('PRODUTO')
//console.log(`${p.getCodigo()} - ${p.getDescricao()} - ${p.getValor().toFixed(2)}`)
//
//let s = new Servico(99, 'Formatação', 150)
//console.log('SERVIÇO')
//console.log(`${s.getCodigo()} - ${s.getDescricao()} - ${s.getValor().toFixed(2)}`)
//
//console.log('===========================================================================================')
