//Variável global que vai exibir o resultado no visor
//A variável var tem valor fixo
//var resultado = 15
//A variável let pode mudar o valor
let visor = document.getElementById("visorCalculadora");

//Objeto que guarda os valores e funções dos cálculos
let calculo = {
    valorSalvo: null,
    functionCalculo: null,
};

//Atribuir eventos aos botões ao carregar a página
window.addEventListener("load", function () {
    atribuirEventos();
});

function atribuirEventos() {
    //Atribuir eventos aos números
    document
        .getElementById("btnValor0")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor1")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor2")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor3")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor4")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor5")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor6")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor7")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor8")
        .addEventListener("click", inserirNumero);
    document
        .getElementById("btnValor9")
        .addEventListener("click", inserirNumero);

    //Atribuir eventos aos demais botões
    document.getElementById("btnD20").addEventListener("click", rolarD20);
    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    document
        .getElementById("btnDividir")
        .addEventListener("click", clicarOperador);
    document
        .getElementById("btnMultiplicar")
        .addEventListener("click", clicarOperador);
    document
        .getElementById("btnSoma")
        .addEventListener("click", clicarOperador);
    document
        .getElementById("btnSubtrair")
        .addEventListener("click", clicarOperador);
    document
        .getElementById("btnVirgula")
        .addEventListener("click", clicarVirgula);
    document
        .getElementById("btnResultado")
        .addEventListener("click", clicarResultado);
}

function inserirNumero() {
    //Se o valor não for um número, substitui pelo valor do botão
    if (isNaN(visor.value)) {
        visor.value = event.target.textContent;
    } else {
        if (visor.value == 0) {
            visor.value = event.target.textContent;
        } else {
            visor.value += event.target.textContent;
        }
    }
}
