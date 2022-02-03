let cartas = [];

askQuantidade();

// =================== FUNÇÕES ===================

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

    cartas.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
    
    insereCartas(quantidadeCartas);
}

function insereCartas(quantidadeCartas){

    let main = document.querySelector("main");

    for(let i=0; i<quantidadeCartas; i++){
        main.innerHTML = main.innerHTML + `<div class='card par${cartas[i]}' onclick='printValorCarta(this)'>` + tipoGif(cartas[i]) + "</div>";
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

function printValorCarta(carta){
    console.log(carta);
}

function comparador() { 
	return Math.random() - 0.5; 
}