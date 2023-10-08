// variavel simbolos

let x = document.querySelector('.x')
let o = document.querySelector('.o')


// variavel botoes

let botoes = document.querySelectorAll('#buttons-container button');


// variavel blocos

let blocos = document.querySelectorAll('.box');


// variavel placar

let placar = document.querySelectorAll('.scoreboard-box');


// variavel segundo player

let segundoPlayer;


// funcoes

function definirPlayer(player1, player2) {

    if (player1 == player2) {

        simbolo = x;

    } else {

        simbolo = o;

    }

    return simbolo;

}


// logica para iniciar o jogo

let player1 = 0;
let player2 = 0;

for (let i = 0; i < blocos.length; i++) {

    blocos[i].addEventListener("click", () => {

        let simbolo = definirPlayer(player1, player2);

        if (blocos[i].childNodes.length == 0) {

            let cloneSimbolo = simbolo.cloneNode(true);

            blocos[i].appendChild(cloneSimbolo);


            // computar a jogada 

            if (player1 == player2) {

                player1++

            } else {

                player2++

            }

        }
    });

}

