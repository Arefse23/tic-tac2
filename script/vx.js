
const cells = document.querySelectorAll('.cell')
const stat_text = document.getElementById('statusText')
const stat_textf = document.getElementById('statusTextf')
const restartbtn = document.getElementById('restartBtn')
const ps1 = document.getElementById('Ps1')
const ps2 = document.getElementById('Ps2')
const aud = document.getElementById('aud')
const aud2 = document.getElementById('aud2')
let ss = 0;
let ss2 = 0;


aud.src ="/sound/Opening-Credits-_-Game-of-Thrones-_-Season-8-_HBO_.mp3"
aud2.src="/sound/sword-sound-effects-for-Editing.mp3"

aud.src ="/sound/Opening-Credits-_-Game-of-Thrones-_-Season-8-_HBO_.mp3"
aud2.src="/sound/sword-sound-effects-for-Editing.mp3"
aud.volume =0.5;
aud2.volume = 0.8;

const winConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options = ['','','','','','','','','']
let cur =["X","O","X","O"]
let rannd = Math.floor(Math.random()*cur.length)
let currentPlayer = cur[rannd];
let running =0;

gamestart();

function gamestart(){

cells.forEach(cell => cell.addEventListener('click', c_clicked))
restartbtn.addEventListener('click',resartGame);
stat_text.textContent = `${currentPlayer}'s turn`
running= 1;
}

function c_clicked(){
    
const cellIndex = this.getAttribute('id');
if(options[cellIndex] != "" || !running){
    return;
}
updateCell(this ,cellIndex); changePlayer();checkWinner();aud.play();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent=currentPlayer;
}
function changePlayer(){
    currentPlayer=(currentPlayer === "X") ? "O" :"X";
    stat_text.textContent =`${currentPlayer}'s turn `
}
function checkWinner(){
    let roundWon = 0;
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cho1 = options[condition[0]];
        const cho2 = options[condition[1]];
        const cho3 = options[condition[2]];
        if(cho1 == "" || 
        cho2 == "" ||
        cho3 == ""){continue;}
        if(cho1 == cho2 && cho2 == cho3){
            roundWon = 1;
            break;
        }
    }

    if(roundWon ===1){
        currentPlayer = (currentPlayer === "X")? "O" :"X";
        stat_text.textContent = `${currentPlayer} wins!`;
        aud2.play();
        running = 0;

        if(currentPlayer === "O"){
            ++ss
            ss.toString();
            ps2.textContent =`${ss}`
            if(ss >1){
                stat_text.textContent = `${currentPlayer}' Double wins or nothing!`;
            }
            if(ss>2){
                stat_text.textContent = `${currentPlayer}' Hat trick Wins!!`;
            }
            if(ss>3){
                stat_text.textContent = `${currentPlayer}' Legend Charcter!!!`;
                stat_textf.textContent ="Final Winner is Player Two"
            }
            
        }
        if(currentPlayer === "X"){
            ++ss2
            ss2.toString();
            ps1.textContent =`${ss2}`
            
            if(ss2 >1){
                stat_text.textContent = `${currentPlayer}' Double wins or nothing!`;
            }
            if(ss2>2){
                stat_text.textContent = `${currentPlayer}' Hat trick Wins!!`;
            }
            if(ss2>3){
                stat_text.textContent = `${currentPlayer}' Legend Charcter!!!`;
                stat_textf.textContent ="Final Winner is Player one"
               
            }
        }
    }
    else if(!options.includes("")){
        stat_text.textContent = `Draw!`;
        running = 0;
    }
   
}
// 
function resartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    stat_text.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    let cur2 =["X","O","X","O"]
    let rannd2 = Math.floor(Math.random()*cur.length)
    currentPlayer = cur2[rannd2];
    stat_text.textContent =`${currentPlayer}'s turn `
    running = 1;
}
