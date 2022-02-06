let cartas = [];
let paresCertos = [];
let statusClick = false;
let cartaSelecionada = null;
let quantidadePares = null;
let relogio = null;

askQuantidade();

function askQuantidade(){
    let condicao = true;
    let quantidadeCartas = null;

    while(condicao === true){
        quantidadeCartas = prompt("Insira a quantidade de cartas: (4-14)");
        if(quantidadeCartas >= 4 && quantidadeCartas <= 14 && quantidadeCartas%2==0)
            condicao = false;
    }

    for(let i=0; i<(quantidadeCartas/2); i++){
        cartas.push(i);
        cartas.push(i);
    }

    quantidadePares = quantidadeCartas/2;
    cartas.sort(comparador);
    
    insereCartas(quantidadeCartas);
}

function insereCartas(quantidadeCartas){

    let main = document.querySelector("main");

    for(let i=0; i<quantidadeCartas; i++){
        main.innerHTML = main.innerHTML 
            + `<div class='card par${cartas[i]}' onclick='clickCarta(this)'><div class="front-face face"><img src='resources/front.png'></div><div class='back-face face'>` 
            + tipoGif(cartas[i]) 
            + "</div></div>";
    }
}

function tipoGif(indice){
    let imagem = null;

    switch(indice){
        case 0:
            imagem = "<img src='resources/bobrossparrot.gif'>";
            break;
            
        case 1:
            imagem = "<img src='resources/explodyparrot.gif'>";
            break;
            
        case 2:
            imagem = "<img src='resources/fiestaparrot.gif'>";
            break;
            
        case 3:
            imagem = "<img src='resources/metalparrot.gif'>";
            break;
            
        case 4:
            imagem = "<img src='resources/revertitparrot.gif'>";
            break;
            
        case 5:
            imagem = "<img src='resources/tripletsparrot.gif'>";
            break;
            
        case 6:
            imagem = "<img src='resources/tripletsparrot.gif'>";
            break;
            
        default:
            imagem = "";
            break;
    }

    return imagem;
}

function clickCarta(carta){
    const back = carta.querySelector(".back-face");

    if(back.classList.contains("back-click") === false){
        virarCarta (carta);
        if(statusClick === false){
            cartaSelecionada = carta;
            statusClick = true;
        }
        else if(cartaSelecionada.classList[1] !== carta.classList[1]){
            statusClick = false;
            setTimeout(virarCarta,2000,cartaSelecionada);
            setTimeout(virarCarta,2000,carta);
            cartaSelecionada = null
        }
        else {
            statusClick = false;
            paresCertos.push(carta.classList[1]);
        }

        if(paresCertos.length === quantidadePares){
            jogoTerminou();
        }
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(carta){
    const back = carta.querySelector(".back-face");
    back.classList.toggle("back-click");

    const front = carta.querySelector(".front-face");
    front.classList.toggle("front-click");
}

function jogoTerminou(){
    alert("JOGO TERMINOU");
}