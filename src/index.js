let nomeHeroi = "Ygor"
let qntXP = 6000
let tierPlayer

if (qntXP <= 1000) {
    tierPlayer = "ferro"
} else if (qntXP >= 1001 && qntXP <= 2000) {
    tierPlayer = "bronze"
} else if (qntXP >= 2001 && qntXP <= 5000) {
    tierPlayer = "prata"
} else if (qntXP >= 5001 && qntXP <= 7000) {
    tierPlayer = "ouro"
} else if (qntXP >= 7001 && qntXP <= 8000) {
    tierPlayer = "platina"
} else if (qntXP >= 8001 && qntXP <= 9000) {
    tierPlayer = "ascendente"
} else if (qntXP >= 9001 && qntXP <= 10000) {
    tierPlayer = "imortal"
} else if (qntXP >= 10001) {
    tierPlayer = "radiante"
} else {
    "inválido"
}