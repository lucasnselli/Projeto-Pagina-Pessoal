const titulo = document.querySelector("h1");
const botaoCor = document.querySelector("#titulo-colorido");
botaoCor.addEventListener("click", function () { titulo.style.color = "Black"; });

const botaoBemVindo = document.querySelector("#botao-bem-vindo");
botaoBemVindo.addEventListener("click", function() { alert("Seja bem-vindo à minha página!");});


const botaoNome = document.querySelector("#botao-nome");
function mostrarNome() {const nome = document.querySelector("#nome").value;
document.querySelector("#mensagem").textContent =`Olá, ${nome}! Seja bem-vindo à minha página.`;}

botaoNome.addEventListener("click", mostrarNome);
