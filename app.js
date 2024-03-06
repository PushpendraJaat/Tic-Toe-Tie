const btns = document.querySelectorAll(".btn");
const reset = document.querySelector("#reset");
const newGame = document.querySelector("#new-game");
const winMgs = document.querySelector("#win-mgs");
const player = document.querySelector("#player");

//win conditions for tic toe tie game

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

//game main login 


let bool = true; // TRUE =  PLAYER O AND FALSE = PLAYER X
let wincountO = 0;
let wincountX = 0;

btns.forEach(button => {
    button.addEventListener('click', () => {
        if(bool){
            button.innerText = "O";
            bool = false;
        }
        else{
            button.innerText = "X";
            bool = true;
        }
        button.disabled = true;
        let winBtns = winCheck();
        if(winBtns != undefined){
            drawWinningLine(winBtns);
        }
        
      });
});

// Drawing line on winning buttons just like on paper game
const drawWinningLine = (winBtn) => {
  btns[winBtn[0]].classList.add("highlighter");
  btns[winBtn[1]].classList.add("highlighter");
  btns[winBtn[2]].classList.add("highlighter");
}


//winning pattern check function
function winCheck() {
    for (let pattern of winningPattern) {
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;

        if (pos1val != 0 && pos1val == pos2val && pos2val == pos3val) {
            let winner = pos1val;

            if (winner == "X") {
                wincountX += 1;
            }
            else {
                wincountO += 1;
            }

            btnDisabled();
            winMgs.innerText = `${winner} is the winner of this game and total winning of X is ${wincountX} and total winning count O is ${wincountO}`;

            return pattern;

        }



    }
}

//button disabled after winning the game
const btnDisabled = () =>{
        btns.forEach(let = btn => {
            btn.disabled = true;
     })  
}

//reset game button 

reset.addEventListener('click', () =>{
    wincountO = 0;
    wincountX = 0;
    winMgs.innerText = "";
    btns.forEach(let = btn => {
           btn.innerText = "";
           btn.disabled = false;
           btn.classList.remove("highlighter");
    })
})

//new game button

newGame.addEventListener('click', () =>{
    btns.forEach(let = btn => {
           btn.innerText = "";
           btn.disabled = false;
           btn.classList.remove("highlighter");
    })
})


