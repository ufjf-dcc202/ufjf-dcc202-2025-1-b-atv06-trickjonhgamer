const tabuleiro = [
  ["Rosa", "Rosa", "Azul", "Azul", "Azul", "Rosa", "Rosa"], 
  ["Rosa", "Rosa", "Azul", "Azul", "Azul", "Rosa", "Rosa"], 
  ["Azul", "Azul", "Azul", "Azul", "Azul", "Azul", "Azul"], 
  ["Azul", "Azul", "Azul", "Transparente", "Azul", "Azul", "Azul"], 
  ["Azul", "Azul", "Azul", "Azul", "Azul", "Azul", "Azul"], 
  ["Rosa", "Rosa", "Azul", "Azul", "Azul", "Rosa", "Rosa"], 
  ["Rosa", "Rosa", "Azul", "Azul", "Azul", "Rosa", "Rosa"], 
];
let selecionadox = null;
let selecionadoy = null;
export function seleciona(posicaox, posicaoy) {
if (selecionadox === null && selecionadoy === null) {
  selecionadox = posicaox;
  selecionadoy = posicaoy;
} else if (selecionadox === posicaox && selecionadoy === posicaoy) {
  selecionadox = null;
  selecionadoy = null;
} else {
mover(selecionadox,selecionadoy,posicaox,posicaoy);
  selecionadox = null;
  selecionadoy = null;
}
console.log(tabuleiro);
}
export function getTabuleiro() {
return [...tabuleiro];
}
function mover(origemx,origemy, destinox, destinoy) {
if (tabuleiro[destinox][destinoy] !== "Transparente") {
return;
}
if((Math.abs(destinox - origemx) > 2)||(Math.abs(destinoy - origemy) > 2)) {
return;
}
if ((destinox - origemx === 2 && tabuleiro[origemx + 1][origemy] === "Transparente")||(destinoy - origemy === 2 && tabuleiro[origemx][origemy+1] === "Transparente")) {
return;
}
if ((destinox - origemx === -2 && tabuleiro[origemx - 1][origemy] === "Transparente")||(destinoy - origemy === -2 && tabuleiro[origemx][origemy-1] === "Transparente")) {
return;
}
tabuleiro[destinox][destinoy] = tabuleiro[origemx][origemy];
tabuleiro[origemx][destinoy] = "Transparente";
}
