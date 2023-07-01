"use strict";
function maiorValor(pVl1, pVl2) {
    if (pVl1 > pVl2)
        return `${pVl1} é maior`;
    else
        return `${pVl2} é maior`;
}
function validaIdade(pIdade) {
    return (pIdade >= 18) ? 'Maior de idade' : 'Menor de Idade';
}
function calculaIdade(pNasc) {
    return 2022 - pNasc;
}
function ehPar(pNumber) {
    return (pNumber % 2 == 0) ? true : false;
}
function retorno() {
    return undefined;
}
function semRetorno() {
    console.log(null);
}
function gravaLog(pMensagem) {
    console.log(pMensagem);
}
gravaLog(document.querySelector('#txtNome'));
gravaLog('Usuário sem acesso');
try {
    //
}
catch (_a) {
    gravaLog(Error("Erro ao efetuar operação"));
}
function defineValor(pValor) {
    console.log(``);
}
function getValor(pValor) {
    return pValor;
}
console.log(getValor('valor string'));
console.log(getValor(10));
console.log(getValor(10.5));
console.log(getValor(0xABC));
console.log(getValor(true));
console.log(getValor(false));
