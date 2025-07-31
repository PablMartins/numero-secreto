let listaNumerosEscolhidos = [];
let quantidadeMaxima = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", `Escolha um numero entre 1 e ${quantidadeMaxima}`);
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio) {
        exibirTextoNaTela("h1", "Acertou!!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabens, você acertou o numero secreto em ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela("p", "O numero secreto e menor");
        } else {
            exibirTextoNaTela("p", "O numero secreto e maior");
        }
    tentativas++;
    limparCampo();
    }
}
function novoNumeroAleatorio() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function gerarNumeroAleatorio() {
    let numeroSecreto = parseInt(Math.random() * quantidadeMaxima + 1);
    let quatidadeNumerosLista = listaNumerosEscolhidos.length;

    if(quatidadeNumerosLista == quantidadeMaxima) {
        listaNumerosEscolhidos = [];
    }

    if (listaNumerosEscolhidos.includes(numeroSecreto)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosEscolhidos.push(numeroSecreto);
        console.log(listaNumerosEscolhidos);
        return numeroSecreto;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}