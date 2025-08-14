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
      const index = i * 7 + j;
      eTabuleiro.children[index].append(eDisco);
    }
  }
}

function atualizaDiscos() {
  const tabuleiro = getTabuleiro();
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      const index = i * 7 + j;
      const celula = eTabuleiro.children[index];
      if (tabuleiro[i][j] !== null) {
        celula.dataset.cor = tabuleiro[i][j];
      } else {
        celula.dataset.cor = "";
      }
    }
  }
}

function discoClick(evento) {
  const i = Number(evento.target.dataset.i);
  const j = Number(evento.target.dataset.j);
  const posicao = [i, j];
  console.log("Click", posicao);
  seleciona(posicao);
  atualizaDiscos();
}

function criaDisco(cor, i, j) {
  const novoDisco = document.createElement("div");
  novoDisco.classList.add("disco");
  novoDisco.dataset.cor = cor;
  novoDisco.dataset.i = i;
  novoDisco.dataset.j = j;
  novoDisco.addEventListener("click", discoClick);
  return novoDisco;
}

function criaTabuleiro() {
  const novoTabuleiro = document.createElement("div");
  novoTabuleiro.classList.add("tabuleiro");
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      const casa = document.createElement("div");
      casa.classList.add("casa");
      casa.dataset.i = i;
      casa.dataset.j = j;
      novoTabuleiro.appendChild(casa);
    }
  }
  return novoTabuleiro;
}


