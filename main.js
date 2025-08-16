import { getTabuleiro, seleciona } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Resta Um";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);
const tabuleiro = getTabuleiro();
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    let cor = "Azul";
    if (
      (i === 0 && (j === 0 || j === 1 || j === 5 || j === 6)) ||
      (i === 1 && (j === 0 || j === 1 || j === 5 || j === 6)) ||
      (i === 5 && (j === 0 || j === 1 || j === 5 || j === 6)) ||
      (i === 6 && (j === 0 || j === 1 || j === 5 || j === 6))
    ) {
      cor = "Rosa";
    }
  
    if (i === 3 && j === 3) {
      cor = "Transparente";
    }
    const eDisco = criaDisco(cor, tabuleiro[i][j]);
    eTabuleiro.append(eDisco);
  }
}

function atualizaDiscos() {
  const tabuleiro = getTabuleiro();
  for (let i = 0; i < eTabuleiro.children.length; i++) {
    for (let j = 0; j < eTabuleiro.children.length; j++) {
      const disco = eTabuleiro.children[i][j];
      disco.dataset.cor = tabuleiro[disco.dataset.posicaox][disco.dataset.posicaoy];
    }
  }
}
function discoClick(evento) {
  const posicaox = Number(evento.target.dataset.posicaox);
  const posicaoy = Number(evento.target.dataset.posicaoy);
  console.log("Click" + posicaox+ " " + posicaoy);
  seleciona(posicaox, posicaoy);
  atualizaDiscos();
}

function criaDisco(cor, posicaox, posicaoy) {
  const novoDisco = document.createElement("div");
  novoDisco.classList.add("disco");
  novoDisco.dataset.cor = cor;
  novoDisco.dataset.posicaox = posicaox;
  novoDisco.dataset.posicaoy = posicaoy;
  novoDisco.addEventListener("click", discoClick);
  return novoDisco;
}

function criaTabuleiro() {
  const novoTabuleiro = document.createElement("div");
  novoTabuleiro.classList.add("tabuleiro");
  return novoTabuleiro;
}