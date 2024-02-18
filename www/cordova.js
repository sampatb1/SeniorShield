const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.getElementById("restartBtn");
let numberOfTurns = 0;
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let winnerDeclared = false;

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";


document.getElementById('restartBtn').addEventListener('click', function () {
    restartGame();
});



//cells.forEach(cell => cell.addEventListener("click", alert('cell is clicked')));
//restartBtn.addEventListener("click",function() {restartGame();});



statusText.textContent = `${currentPlayer}'s turn`;

function cellClicked(p) {

    if (winnerDeclared) {
        return alert("Game is over");
    }
    else {
        const id = p.getAttribute("id");
        console.log(id)
        numberOfTurns++
        if (options[id] == "") {
            updateCell(p, id);
    
        }
    }


}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
    console.log(options)
    checkWinner();

}

function changePlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
        statusText.textContent = `${currentPlayer}'s turn`;
    }
    else {
        currentPlayer = "X";
        statusText.textContent = `${currentPlayer}'s turn`;
    }


}

function checkWinner() {
    console.log("for loop")
    if ((options[0] == options[1] && options[1] == options[2] && options[2] != "")
        || (options[3] == options[4] && options[4] == options[5] && options[3] != "")
        || (options[6] == options[7] && options[7] == options[8] && options[8] != "")
        || (options[0] == options[3] && options[3] == options[6] && options[3] != "")
        || (options[1] == options[4] && options[4] == options[7] && options[4] != "")
        || (options[2] == options[5] && options[5] == options[8] && options[2] != "")
        || (options[0] == options[4] && options[4] == options[8] && options[8] != "")
        || (options[2] == options[4] && options[4] == options[6] && options[2] != "")) {
        console.log("Winner");
        winnerDeclared = true;

        statusText.textContent = currentPlayer + " wins!";

        


    }


    changePlayer();

    if (numberOfTurns == 9) {
        statusText.textContent = " Game is a draw!";
    }

}

function restartGame() {
    location.reload();
    

}
