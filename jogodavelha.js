// Variáveis
var tab = ['','','','','','','','',''];
var playerTime = 0;
var gameOver = false;

let symbol = ['x','o'];
let winners = [
                [0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]
];

// Esperar a página carregar para executar
document.addEventListener('DOMContentLoaded', () => {
    // Pegar todos os seletores com classe square
    let squares = document.querySelectorAll('.square');
    // Varrer todos os seletores dentro da classe square e criar o evento de clicar
    squares.forEach((square) => {
        square.addEventListener('click', (event) => {
            
            // Pegar o id do target do quadrado clicado e verificar qual jogado realizou a jogada
            if(played(event.target.id)){
                setTimeout(() => {
                    alert('Jogo encerrado - Parabéns jogador ' + playerTime),1000
                })
            };
            // Colocar o simbolo no quadrado clicado
            updateGame(event.target.id)
        })
    })
})
// Função para atualizar as imagens do tabuleiro
// Função para preencher o quadrado clicado
function updateGame(position) {

    let square = document.getElementById(position.toString());
    square.innerHTML = `<div class= "${tab[position]}"></div>`
}
function played(position){
    
    if (winner()){
        return;
    }
    // Verificar se a posição está vazia, caso esteja coloca o simbolo (x ou o) no quadrado clicado, baseando-se no player que clicou (0 ou 1)
    if (tab[position] == ''){
        tab[position] = symbol[playerTime]

        if(winner() == false){
            
            playerTime = (playerTime == 0) ? 1 : 0

        }
    }
    return winner();
}

function winner(){
    
    for(let i = 0; i < winners.length; i++ ){
        
        if (tab[winners[i][0]] == tab[winners[i][1]] &&
            tab[winners[i][1]] == tab[winners[i][2]] &&
            tab[winners[i][0]] != ''){
                
                return true;
            }
    }
    return false;
}
function reset() {

    return document.location.reload();
}