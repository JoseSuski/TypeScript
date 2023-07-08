"use strict";
class Produto {
    constructor() {
        this.qtde = 100;
        this.valor = 150;
    }
    decrementaQtdeVenda(pQtdeVenda) {
        this.qtde -= pQtdeVenda;
    }
    atualizaEstoque() {
        document.getElementById('qtdProduto').innerHTML = 'Estoque: ' + this.getQtde().toFixed(0);
    }
    estoqueDisponivel(pQtdeVenda) {
        return pQtdeVenda <= this.qtde;
    }
    efetuaVenda(pQtde) {
        if (this.estoqueDisponivel(pQtde)) {
            this.decrementaQtdeVenda(pQtde);
            this.atualizaEstoque();
            this.totalizaPgto(pQtde);
        }
        else {
            document.getElementById('qtdProduto').innerHTML = 'Estoque Indisponível';
        }
    }
    getQtde() {
        return this.qtde;
    }
    totalizaPgto(pQtdeVenda) {
        //let vlAtual = document.getElementById('vlPagar') as HTMLLabelElement
        var vlAtual = document.getElementById('vlPagar');
        let total = parseFloat(vlAtual.innerHTML) + pQtdeVenda * this.getValor();
        vlAtual.innerHTML = total.toFixed(2);
    }
    getValor() {
        return this.valor;
    }
}
class ControleServico {
    constructor() {
        this.valor = 120;
    }
    efetuaVenda(pQtde) {
        throw new Error("Method not implemented.");
    }
}
let prod = new Produto();
console.log(prod.getQtde().toFixed(2));
