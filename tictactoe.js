const start = document.querySelector("#start");
start.addEventListener("click", Gameboard);

const container = document.querySelector("#gameboard");

/* FUNÇÃO QUE GERA O ARRAY CONTENDO OS 'X E O' E OS PRINTAM NA TELA */
function Gameboard(){ 
    let array = ['o','','','x','','','x','',''];
    console.log(array);
    const update = () =>{
        const cells = container.children;

    for (let i = 0; i < array.length; i++){
        cells[i].innerText = `${array[i]}`;
    }
}

    const create = () => {

    for (let i = 0; i < array.length; i++){
        const elemBoard = document.createElement('div');
        elemBoard.setAttribute('id','box'+i);
        elemBoard.setAttribute('class','box');
        container.appendChild(elemBoard);
    }
    update();
}
create();
};

