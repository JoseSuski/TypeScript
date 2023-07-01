class ContaBancaria {
    private saldo: number

    constructor() {
        this.saldo = 0
    }

    protected getSaldo(): number {
        return this.saldo
    }

    public exibeSaldo(): string {
        (<HTMLDivElement>document.getElementById('retorno')).innerHTML =
            `Saldo atual ${this.getSaldo().toFixed(2)}`
        return `Saldo atual R$ ${this.getSaldo().toFixed(2)}`
    }

    public depositar(pValor: number): void {
        let resposta = (<HTMLDivElement>document.getElementById('retorno'))
        this.saldo += pValor
        resposta.innerHTML = `Depósito de R$ ${pValor.toFixed(2)} efetuado com sucesso`
    }

    public sacar(pValor: number): void {
        let resposta = (<HTMLDivElement>document.getElementById('retorno'))
        !(this.saldoDisponivel(pValor))
            ? resposta.innerHTML = this.exibeSemSaldo()
            : resposta.innerHTML = `Saque de R$ ${pValor.toFixed(2)} efetuado com sucesso`
        this.saldo = (this.saldo >= pValor) ? this.saldo -= pValor : this.saldo
    }

    private exibeSemSaldo(): string {
        return 'Saldo indisponível'
    }

    private saldoDisponivel(pValor: number): boolean {
        return (this.saldo >= pValor) ? true : false
    }

}

class Corrente extends ContaBancaria {

}

var c = new ContaBancaria()