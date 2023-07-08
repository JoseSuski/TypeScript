enum ECores {
    //Key = Value
    tBlue = 0,
    tYellow = 1,
    tWhite = 2,
    tGreen = 3
}

let Cores = [0, 1, 2, 3]

for (let i = 0; i <= (Object.keys(ECores).length - 1) / 2; i++) {
    console.log(ECores[i])
}