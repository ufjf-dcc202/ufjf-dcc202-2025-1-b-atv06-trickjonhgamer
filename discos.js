const tabuleiro = [
  ["Rosa", "Rosa", "Azul", "Azul", "Azul", "Rosa", "Rosa"], 
  ["Rosa", "Rosa", "Azul", "Azul", "Azul", "Rosa", "Rosa"], 
  ["Azul", "Azul", "Azul", "Azul", "Azul", "Azul", "Azul"], 
  ["Azul", "Azul", "Azul", "Transparente", "Azul", "Azul", "Azul"], 
  ["Azul", "Azul", "Azul", "Azul", "Azul", "Azul", "Azul"], 
  ["Rosa", "Rosa", "Azul", "Azul", "Azul", "Rosa", "Rosa"], 
  ["Rosa", "Rosa", "Azul", "Azul", "Azul", "Rosa", "Rosa"], 
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
