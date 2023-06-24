class ContaBancaria {
    private saldo: number

    constructor() {
        this.saldo = 0
    }

    protected getSaldo(): number {
        return this.saldo
    }

    public exibeSaldo(): string {
        return `Saldo atual R$ ${this.getSaldo().toFixed(2)}`
    }

    public depositar(pValor: number): void {
        this.saldo += pValor
    }

    public sacar(pValor: number): void {
        !(this.saldoDisponivel(pValor)) ? console.log(this.exibeSemSaldo()) : ''
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
    
    msgretorno = this.exibeSaldo() //método public
    msgretorno2 = this.getSaldo() // método protected
    //m3 = this.saldoDisponivel() //método private [APONTANDO ERRO]

}