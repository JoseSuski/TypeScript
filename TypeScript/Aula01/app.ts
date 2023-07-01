function maiorValor(pVl1: number, pVl2: number): string {

    if (pVl1 > pVl2)
        return `${pVl1} é maior`
    else
        return `${pVl2} é maior`
}

function validaIdade(pIdade: number): string {
    return (pIdade >= 18) ? 'Maior de idade' : 'Menor de Idade'
}

function calculaIdade(pNasc: number): number {
    return 2022 - pNasc
}

function ehPar(pNumber: number): boolean {
    return (pNumber % 2 == 0) ? true : false
}

function retorno(): any {
    return undefined
}

function semRetorno(): void {
    console.log(null)
}

function gravaLog(pMensagem: any): void {
    console.log(pMensagem)
}

gravaLog(document.querySelector('#txtNome'))
gravaLog('Usuário sem acesso')

try {
    //
}
catch {
    gravaLog(Error("Erro ao efetuar operação"))
}

type Pessoa = {
    'nome' : string
    'idade' : number
    'campo' : string | number
}

function defineValor(pValor : Pessoa){
    console.log(``)
}

function getValor(pValor : string | number | boolean) : any {
    return pValor
}

console.log(getValor('valor string'))
console.log(getValor(10))
console.log(getValor(10.5))
console.log(getValor(0xABC))
console.log(getValor(true))
console.log(getValor(false))


