const tabuleiro = [
    null, null, "A", "A", "A", null, null,
    null, null, "A", "A", "A", null, null,
    "A", "A", "A", "A", "A", "A", "A",
    "A", "A", "A", "T", "A", "A", "A",
    "A", "A", "A", "A", "A", "A", "A",
    null, null, "A", "A", "A", null, null,
    null, null, "A", "A", "A", null, null
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