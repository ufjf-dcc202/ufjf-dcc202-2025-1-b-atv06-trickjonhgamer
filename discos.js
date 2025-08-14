const tabuleiro = [
    [null, null, "A", "A", "A", null, null],
    [null, null, "A", "A", "A", null, null],
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "T", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A"],
    [null, null, "A", "A", "A", null, null],
    [null, null, "A", "A", "A", null, null]
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
function mover(origem, destino) {
  const [origemX, origemY] = origem;
  const [destinoX, destinoY] = destino;

  if (tabuleiro[destinoX][destinoY] !== "Transparente") {
    return;
  }

  const distX = Math.abs(destinoX - origemX);
  const distY = Math.abs(destinoY - origemY);

  if (distX > 2 || distY > 2 || (distX !== 0 && distY !== 0)) {
    return;
  }

 
  if (distX === 2 && tabuleiro[(origemX + destinoX) / 2][origemY] === "Transparente") {
    return;
  }
  if (distY === 2 && tabuleiro[origemX][(origemY + destinoY) / 2] === "Transparente") {
    return;
  }

  tabuleiro[destinoX][destinoY] = tabuleiro[origemX][origemY];
  tabuleiro[origemX][origemY] = "Transparente";
}
export function getTabuleiro() {
  return tabuleiro;
}





