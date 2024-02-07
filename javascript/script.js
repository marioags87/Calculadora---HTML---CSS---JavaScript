//Variável global que vai exibir o resultado no visor
let visor = document.getElementById("visorCalculadora");

//Objeto que guarda os valores e funções dos cálculos
let calculo = {
    valorSalvo: null,
    functionCalculo: null
}

//Atribuir eventos aos botões ao carregar a página
window.addEventListener("load", function() {
    atribuirEventos();
})

function atribuirEventos() {
    //Atribuir eventos aos números
    document.getElementById("btnValor0").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor1").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor2").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor3").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor4").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor5").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor6").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor7").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor8").addEventListener("click", event => inserirNumero(event));
    document.getElementById("btnValor9").addEventListener("click", event => inserirNumero(event));

    //Atribuir eventos aos demais botões
    document.getElementById("btnD20").addEventListener("click", event => rolarD20());
    document.getElementById("btnLimpar").addEventListener("click", event => limparDados());
    document.getElementById("btnApagar").addEventListener("click", event => apagarDado());
    document.getElementById("btnDividir").addEventListener("click", event => clicarOperador("/"));
    document.getElementById("btnMultiplicar").addEventListener("click", event => clicarOperador("x"));
    document.getElementById("btnSoma").addEventListener("click", event => clicarOperador("+"));
    document.getElementById("btnSubtrair").addEventListener("click", event => clicarOperador("-"));
    document.getElementById("btnVirgula").addEventListener("click", event => clicarVirgula());
    document.getElementById("btnResultado").addEventListener("click", event => clicarResultado());

    //Atribuir eventos ao teclado
    document.addEventListener("keydown", event => keyCodePress(event), false)
}

function inserirNumero(event) {
    //Se o valor não for um número, substitui pelo valor do botão
    if(isNaN(visor.value))
    {
        visor.value = event.target.textContent;
    }
    else{
        if(visor.value === 0){
            visor.value = event.target.textContent;
        }
        else{
            visor.value += event.target.textContent;
        }
    }
}

function inserirNumeroKey(number) {
    //Se o valor não for um número, substitui pelo valor do botão
    if(isNaN(visor.value))
    {
        visor.value = number;
    }
    else{
        if(visor.value === 0){
            visor.value = number;
        }
        else{
            visor.value += number;
        }
    }
}

function somar(valor1, valor2){
    return valor1 + valor2;
}

function subtrair(valor1, valor2){
    return valor1 - valor2;
}

function multiplicar(valor1, valor2){
    return valor1 * valor2;
}

function dividir(valor1, valor2){
    if(valor2 === 0){
        return "Impossível dividir por zero"
    }
    else{
        return valor1 / valor2;
    }
}

function atribuirOperacao(operador){
    switch(operador)
    {
        case "+": calculo.functionCalculo = somar; break;
        case "-": calculo.functionCalculo = subtrair; break;
        case "x": calculo.functionCalculo = multiplicar; break;
        default: calculo.functionCalculo = dividir;
    }
}

function clicarOperador(operador){
    if(!isNaN(visor.value)){
        if(calculo.valorSalvo == null)
        {
            calculo.valorSalvo = Number(visor.value)
        }
        else{
            if(calculo.functionCalculo != null){
                calculo.valorSalvo = calculo.functionCalculo(calculo.valorSalvo, Number(visor.value))
            }
        }
    }
    atribuirOperacao(operador)
    visor.value = operador
}

function clicarResultado(){
    if(!isNaN(visor.value) && calculo.functionCalculo != null){
        let resultado = calculo.functionCalculo(calculo.valorSalvo, Number(visor.value))
        visor.value = resultado
        calculo.valorSalvo = resultado
        calculo.functionCalculo = null
    }
}

function limparDados(){
    visor.value = ""
    calculo.valorSalvo = null
    calculo.functionCalculo = null
}

function apagarDado(){
    let resultado = visor.value
    if(resultado.length > 0){
        resultado = resultado.substring(0, resultado.length-1)
        visor.value = resultado
    }
}

function clicarVirgula(){
    if(visor.value === "" || isNaN(visor.value)){
        visor.value = "0."
    }
    else if(!visor.value.includes("."))
    {
        visor.value = visor.value + "."
    }
}

function rolarD20(){
    let random = Math.floor(Math.random() * (20) + 1)
    visor.value = random
}

function keyCodePress(event){
    let key = event.key
    switch(key){
        case ",": clicarVirgula(); break;
        case ".": clicarVirgula(); break;
        case "/": clicarOperador("/"); break;
        case "+": clicarOperador("+"); break;
        case "-": clicarOperador("-"); break;
        case "*": clicarOperador("*"); break;
        case "=": clicarResultado(); break;
        case "Enter": clicarResultado(); break;
        case "Backspace": apagarDado(); break;
        case "Delete": apagarDado(); break;
        case "0": inserirNumeroKey(0); break;
        case "1": inserirNumeroKey(1); break;
        case "2": inserirNumeroKey(2); break;
        case "3": inserirNumeroKey(3); break;
        case "4": inserirNumeroKey(4); break;
        case "5": inserirNumeroKey(5); break;
        case "6": inserirNumeroKey(6); break;
        case "7": inserirNumeroKey(7); break;
        case "8": inserirNumeroKey(8); break;
        case "9": inserirNumeroKey(9); break;
        case "d": rolarD20(); break;
        case "D": rolarD20(); break;
        case "l": limparDados(); break;
        case "L": limparDados();
    }
}
