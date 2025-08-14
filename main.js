import { getTabuleiro, seleciona } from "./discos.js";
const eH1 = document.querySelector("h1");
eH1.textContent = "Olá Mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);
const tabuleiro = getTabuleiro();
for (let i = 0; i < tabuleiro.length; i++) {
for (let j = 0; j < tabuleiro[i].length; j++) {
if (tabuleiro[i][j] !== null) {
const eDisco = criaDisco(tabuleiro[i][j], i, j);
eTabuleiro.children[i].children[j].append(eDisco);
    }
  }
}
function atualizaDiscos() {
    const tabuleiro = getTabuleiro();
    for (let i = 0; i < eTabuleiro.children.length; i++) {
      const disco = eTabuleiro.children[i];
      disco.dataset.cor = tabuleiro[disco.dataset.posicao];
    }
  }