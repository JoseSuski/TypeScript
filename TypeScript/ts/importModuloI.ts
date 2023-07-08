import * as Recursos from "./moduloI";
import { ModuloPessoas, M, /*ModuloItens as MI*/ } from "./modulosII";

let objClasse = new Recursos.ClasseModuloI()
console.log(objClasse.Atributo1)

Recursos.mostraMsg()

let p = new ModuloPessoas.PessoaModulo()

/*let Obj = new M.ProdutosModulo()
Obj.atributoProduto

let mi = new MI.ClasseItens()
mi.atributosItens*/
