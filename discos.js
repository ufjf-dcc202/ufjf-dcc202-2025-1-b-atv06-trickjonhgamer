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
function mover(origemx, origemy, destinox, destinoy) {
  
  if (tabuleiro[destinox][destinoy] !== "Transparente") {
    return;
  }

  const dx = destinox - origemx;
  const dy = destinoy - origemy;

  
  if (!((Math.abs(dx) === 2 && dy === 0) || (Math.abs(dy) === 2 && dx === 0))) {
    return;
  }

  
  const midX = origemx + (dx === 0 ? 0 : dx / 2);
  const midY = origemy + (dy === 0 ? 0 : dy / 2);

  
  if (tabuleiro[midX][midY] === "Transparente") {
    return;
  }

  tabuleiro[destinox][destinoy] = tabuleiro[origemx][origemy];
  tabuleiro[origemx][origemy] = "Transparente";
  tabuleiro[midX][midY] = "Transparente";
}
