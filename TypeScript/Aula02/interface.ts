interface IItem {
    cod: number
    descricao: string
    valor: number
    controlaEstoque: boolean

    setDescricao(pValor: string): void
    setValor(pValor: number): void

    getCodigo(): number
    getDescricao(): string
    getValor(): number
    getControlaEstoque(): boolean
}

class Prod implements IItem {
    cod: number
    descricao: string
    valor: number
    quantidade: number
    controlaEstoque

    constructor(pCod: number, pDescricao: string, pValor: number, pQuantidade: number) {
        this.cod = pCod
        this.descricao = pDescricao
        this.valor = pValor
        this.controlaEstoque = true
        this.quantidade = pQuantidade
    }

    setDescricao(pValor: string) {
        this.descricao = pValor
    }

    setValor(pValor: number) {
        this.valor = pValor
    }

    getCodigo(): number {
        return this.cod
    }

    getDescricao(): string {
        return this.descricao
    }

    getValor(): number {
        return this.valor
    }

    getControlaEstoque(): boolean {
        return false
    }

    getQuantidade(): number {
        return 100
    }

    public quantidadeProdutos(): string{
        (<HTMLDivElement>document.getElementById('qtdProduto')).innerHTML = `${this.getQuantidade}`
        console.log(`${this.getQuantidade}`)
        return `${this.getQuantidade}`
    }
}

class Servico implements IItem {
    cod: number
    descricao: string
    valor: number
    controlaEstoque

    constructor(pCod: number, pDescricao: string, pValor: number) {
        this.cod = pCod
        this.descricao = pDescricao
        this.valor = pValor
        this.controlaEstoque = false
    }

    setDescricao(pValor: string) {
        this.descricao = pValor
    }

    setValor(pValor: number) {
        this.valor = pValor
    }

    getCodigo(): number {
        return this.cod
    }

    getDescricao(): string {
        return this.descricao
    }

    getValor(): number {
        return this.valor
    }

    getControlaEstoque(): boolean {
        return false
    }
}

var p = new Prod(1, 'Camiseta', 99.99, 100)

var s = new Servico(1, 'Limpeza', 249.99)

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
