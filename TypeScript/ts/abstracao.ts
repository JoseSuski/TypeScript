abstract class ClasseAbstrata {

    public abstract atributo1: string
    public abstract atributo2: number
    public atributo3: boolean = false

    public abstract setAttr1(pVlAttr1: string): void

    protected abstract setAttr2(): void

    protected setAttr3(pAttr3: boolean) {
        this.atributo3 = pAttr3
    }

    public abstract getValor(): string
}

class Herdeira extends ClasseAbstrata {
    public atributo1: string = ''
    public atributo2: number = 0
    public valor?: number

    public setAttr1(pValor: string) {
        this.atributo1 = pValor
    }
    protected setAttr2(): void {

    }

    protected setAttr3(pAttr3: boolean) {
        this.atributo3 = pAttr3
    }

    public setValue(pValue: number) {
        this.valor = pValue
    }

    public getValor(): string {
        return ''
    }
}

class SegundaClasse extends ClasseAbstrata {
    public atributo1: string = ''
    public atributo2: number = 0

    public setAttr1(pValor: string) {
        this.atributo1 = pValor
    }

    protected setAttr2(): void {

    }

    public getValor(): string {
        return ''
    }
}