interface IProduto {
    qtde: number
    valor: number

    efetuaVenda(pQtde: number): void
    getQtde(): number
    estoqueDisponivel(pQtdeVenda: number): boolean
    atualizaEstoque(): void
    decrementaQtdeVenda(pQtdeVenda?: number): void
    totalizaPgto(pQtdeVenda: number): void
    getValor(): number
}

interface IServico {
    valor: number

    efetuaVenda(pQtde: number): void
}

class Produto implements IProduto {
    public qtde: number
    public valor: number

    constructor() {
        this.qtde = 100
        this.valor = 150
    }
    decrementaQtdeVenda(pQtdeVenda: number): void {
        this.qtde -= pQtdeVenda
    }
    atualizaEstoque(): void {
        (<HTMLDivElement>document.getElementById('qtdProduto')).innerHTML = 'Estoque: ' + this.getQtde().toFixed(0)
    }
    estoqueDisponivel(pQtdeVenda: number): boolean {
        return pQtdeVenda <= this.qtde
    }

    efetuaVenda(pQtde: number): void {
        if (this.estoqueDisponivel(pQtde)) {
            this.decrementaQtdeVenda(pQtde)
            this.atualizaEstoque()
            this.totalizaPgto(pQtde)
        } else {
            (<HTMLDivElement>document.getElementById('qtdProduto')).innerHTML = 'Estoque Indisponível'
        }
    }
    getQtde(): number {
        return this.qtde
    }

    totalizaPgto(pQtdeVenda: number): void {
        //let vlAtual = document.getElementById('vlPagar') as HTMLLabelElement
        var vlAtual = (<HTMLLabelElement>document.getElementById('vlPagar'))
        let total = parseFloat(vlAtual.innerHTML) + pQtdeVenda * this.getValor()
        vlAtual.innerHTML = total.toFixed(2)
    }

    getValor(): number {
        return this.valor
    }

}

class ControleServico implements IServico {
    public valor: number

    constructor(){
        this.valor = 120
    }
    efetuaVenda(pQtde: number): void {
        throw new Error("Method not implemented.")
    }
}
let prod = new Produto()
console.log(prod.getQtde().toFixed(2))