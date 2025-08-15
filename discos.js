const tabuleiro = [
"Azul",
"Azul",
"Azul",
"Transparente",
"Azul",
"Azul",
"Azul",
];
let selecionado = null;
export function seleciona(posicao) {
if (selecionado === null) {
selecionado = posicao;
} else if (selecionado === posicao) {
selecionado = null;
} else {
mover(selecionado, posicao);
selecionado = null;
}
console.log(tabuleiro);
}
export function getTabuleiro() {
return [...tabuleiro];
}
function mover(origem, destino) {
if (tabuleiro[destino] !== "Transparente") {
return;
}
if (Math.abs(destino - origem) > 2) {
return;
}
if (destino - origem === 2 && tabuleiro[origem + 1] === "Transparente") {
return;
}
if (destino - origem === -2 && tabuleiro[origem - 1] === "Transparente") {
return;
}
tabuleiro[destino] = tabuleiro[origem];
tabuleiro[origem] = "Transparente";
}
