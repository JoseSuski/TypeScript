"use strict";
var TipoPessoa;
(function (TipoPessoa) {
    TipoPessoa["tpFisica"] = "Pessoa F\u00EDsica";
    TipoPessoa["tpJuridica"] = "Pessoa Juridica";
})(TipoPessoa || (TipoPessoa = {}));
function adicionaDados() {
    let combo = document.getElementById('txtTipoPessoa');
    for (let i = 1; i <= (Object.keys(TipoPessoa).length - 1) / 2; i++) {
        let opt = document.createElement('option');
        //opt.value = '1'
        //opt.text = 'Item adicionado no select'
        opt.value = i.toString();
        opt.text = TipoPessoa['tpJuridica'];
        combo.add(opt);
    }
}
