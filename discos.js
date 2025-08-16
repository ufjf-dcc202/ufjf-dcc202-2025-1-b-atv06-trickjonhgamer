const tabuleiro = [
  [null, null, "Azul", "Azul", "Azul", null, null], // linha 0
  [null, null, "Azul", "Azul", "Azul", null, null], // linha 1
  ["Azul", "Azul", "Azul", "Azul", "Azul", "Azul", "Azul"], // linha 2
  ["Azul", "Azul", "Azul", "Transparente", "Azul", "Azul", "Azul"], // linha 3
  ["Azul", "Azul", "Azul", "Azul", "Azul", "Azul", "Azul"], // linha 4
  [null, null, "Azul", "Azul", "Azul", null, null], // linha 5
  [null, null , "Azul", "Azul", "Azul", null, null], // linha 6
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
