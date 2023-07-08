"use strict";
var ECores;
(function (ECores) {
    //Key = Value
    ECores[ECores["tBlue"] = 0] = "tBlue";
    ECores[ECores["tYellow"] = 1] = "tYellow";
    ECores[ECores["tWhite"] = 2] = "tWhite";
    ECores[ECores["tGreen"] = 3] = "tGreen";
})(ECores || (ECores = {}));
let Cores = [0, 1, 2, 3];
for (let i = 0; i <= (Object.keys(ECores).length - 1) / 2; i++) {
    console.log(ECores[i]);
}
