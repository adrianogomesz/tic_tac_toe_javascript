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


function checkWinCondition() {

    let b1 = document.getElementById('bloco-1');
    let b2 = document.getElementById('bloco-2');
    let b3 = document.getElementById('bloco-3');
    let b4 = document.getElementById('bloco-4');
    let b5 = document.getElementById('bloco-5');
    let b6 = document.getElementById('bloco-6');
    let b7 = document.getElementById('bloco-7');
    let b8 = document.getElementById('bloco-8');
    let b9 = document.getElementById('bloco-9');


    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    // condicoes horizontais 

    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
        console.log("X venceu");

    } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
        console.log("O venceu");

    }


    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
        console.log("X venceu");

    } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
        console.log("O venceu");

    }


    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
        console.log("X venceu");

    } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
        console.log("O venceu");

    }
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

            checkWinCondition();

        }
           
    });

}
