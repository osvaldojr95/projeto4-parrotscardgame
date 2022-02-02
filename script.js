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

    insereCartas(quantidadeCartas);
}

function insereCartas(quantidadeCartas){
    for(let i=0; i<(quantidadeCartas/2); i++){
        cartas.push(i);
        cartas.push(i);
    }

    let main = document.querySelector("main");

    for(let i=0; i<quantidadeCartas; i++){
        main.innerHTML = main.innerHTML + `<div class='card par${cartas[i]}'></div>`;
    }
}