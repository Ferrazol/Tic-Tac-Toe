
const container = document.querySelector("#gameboard");

/* FUNÇÃO QUE GERA O TABULEIRO DO JOGO */
const Gameboard = () => { 
    //gera o array que serão os campos clicaveis
    let array = ['','','',
                '','','',
                '','',''];

    //update na tela de acordo com oq tem no array
    const update = () =>{
        const cells = container.children;

    for (let i = 0; i < array.length; i++){
        cells[i].innerText = `${array[i]}`;
    }
}
    //cria o meu tabuleiro vazio, dá ID e class para cada box
    const create = () => {

    for (let i = 0; i < array.length; i++){
        const elemBoard = document.createElement('div');
        elemBoard.setAttribute('id','box'+i);
        elemBoard.setAttribute('class','box');
        container.appendChild(elemBoard);
    }
    update();
}
  return {update,create,Gameboard,array}
};


/* FUNÇÃO QUE DITA O GAMEPLAY DO JOGO */

const gameplay = () => {

    //CRIA O TABULEIRO
    const game = Gameboard();
    game.create();
    console.log(game);
    //CRIA OS DOIS JOGADORES
    const playerOne = createPlayer('Player 1', 'x');
    const playerTwo = createPlayer('Player 2', 'o');
    let activePlayer = playerOne;

    //escuta os eventos após o jogador clicar na div
    const clicar = () =>{
        document.querySelectorAll(".box").forEach(function(ele,index){
        ele.addEventListener('click', function(e){
            if(game.array[index] === ''){
                game.array[index] = activePlayer.marker;
                console.log(game.array);
                game.update();
                win();
                draw();
                proximo();
            }
            else if (game.array[index] === 'x' || game.array[index] === 'o'){
                console.log('ja jogou aqui');
            }

        });
    })}

    const proximo = () => {
        if(activePlayer === playerOne){
            activePlayer = playerTwo;
        }
        else if(activePlayer === playerTwo){
            activePlayer = playerOne;   
        }
    }
    //DETERMINA SE HOUVE GANHADOR
    const win = () => {
        let a = game.array;
        if (a[0] == [activePlayer.marker] && a[1] == [activePlayer.marker] && a[2] == [activePlayer.marker]
            || (a[0] == [activePlayer.marker] && a[3] == [activePlayer.marker] && a[6] == [activePlayer.marker])
            || (a[0] == [activePlayer.marker] && a[4] == [activePlayer.marker] && a[8] == [activePlayer.marker])
            || (a[3] == [activePlayer.marker] && a[4] == [activePlayer.marker] && a[5] == [activePlayer.marker])
            || (a[6] == [activePlayer.marker] && a[7] == [activePlayer.marker] && a[8] == [activePlayer.marker])
            || (a[1] == [activePlayer.marker] && a[4] == [activePlayer.marker] && a[7] == [activePlayer.marker])
            || (a[2] == [activePlayer.marker] && a[5] == [activePlayer.marker] && a[8] == [activePlayer.marker])
            || (a[2] == [activePlayer.marker] && a[4] == [activePlayer.marker] && a[6] == [activePlayer.marker])){
                
            alert('ganhou');
        }
    }
    //DETERMINA SE EMPATOU
    const draw = () =>{
        if(game.array.includes('') === false){
            alert('empatou');
        }
    }
    // const resetButton = document.querySelector("#resetButton");
    // resetButton.addEventListener("click", reset);

    // const reset = () =>{
    //     game.array = ['','','',
    //                 '','','',
    //                 '','',''];
    // }
    clicar();

    return {gameplay}
    
};

// FABRICA QUE CRIA OS JOGADORES E SUA MARCAÇÃO
const createPlayer = (name, marker) => {
    return {name, marker};
}

gameplay();