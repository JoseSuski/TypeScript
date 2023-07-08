export module ModuloPessoas {

    abstract class ModeloPessoas { }
    export class PessoaModulo { }
    interface IModeloPessoas { }
    function funcaoModeloPessoas() { }
    class ClasseInterface implements IModeloPessoas { }
    class ClasseHeranca extends PessoaModulo { }
    let variavelModeloPessoas: number = 4
    const constteModeloPessoas = ''
    export module ModuloObjetos {
        class ProdutosModulo { }
        function funcaoProdModulos(pParametro: string) { }
        export var obj = ProdutosModulo
    }

    export module ModuloItens { }
}

export { ModuloPessoas as M }