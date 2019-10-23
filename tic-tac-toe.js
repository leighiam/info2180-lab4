//"use strict";

//document.addEventListener("DomContentLoaded", function(){
function start (){
    let drawBoard = document.getElementById("board").children;
    for(let i = 0; i < drawBoard.length; i++)
    {
        drawBoard[i].classList.add("square");
        //console.log(drawBoard[i].innerHTML);
    }
    //const playArray = new Array();
    play_game();
    active_square();
   // winner();
    
}
window.onload = start;


let playArray = new Array();
function play_game()
{
    let makePlay = document.querySelectorAll('.square');
    for(let i = 0; i < makePlay.length; i++)
    {
        makePlay[i].onclick = function(){
            if(playArray.length === 0)
            {
                makePlay[i].classList.add("square","X");
                makePlay[i].innerHTML = "X";
                playArray.push('X');
            }
            else
            {
                if(playArray[playArray.length-1] === 'X')
                {
                    makePlay[i].classList.add("square","O");
                    makePlay[i].innerHTML = "O";
                    //makePlay[i].setAttribute("class","O");
                    playArray.push('O');
                }
                else if(playArray[playArray.length-1] === 'O')
                {
                    makePlay[i].classList.add("square","X");
                    makePlay[i].innerHTML = "X";
                   // makePlay[i].setAttribute("class","X");
                    playArray.push('X');
                }
            }winner();
            //new_game(makePlay);
        }

    }new_game(makePlay);
}

function active_square()
{
    let current_square = document.querySelectorAll('.square');
    for(let i = 0; i < current_square.length; i++)
    {
        current_square[i].addEventListener("mouseover", function()
        {
            current_square[i].classList.add("hover");
        });
        current_square[i].addEventListener("mouseout", function()
        {
            current_square[i].classList.remove("hover");
        });
    }
}

function winner()
{
    let game_Board = document.getElementById("board").children;
    let square1 = game_Board[0].innerHTML;
    let square2 = game_Board[1].innerHTML;
    let square3 = game_Board[2].innerHTML;
    let square4 = game_Board[3].innerHTML;
    let square5 = game_Board[4].innerHTML;
    let square6 = game_Board[5].innerHTML;
    let square7 = game_Board[6].innerHTML;
    let square8 = game_Board[7].innerHTML;
    let square9 = game_Board[8].innerHTML;
    let status_msg = document.getElementById("status");
    if(square1 === "X"  && square2 === "X" && square3 === "X")
    {
      
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! X is the Winner!";
    }
    else if(square4 === "X"  && square5 === "X" && square6 === "X")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! X is the Winner!";
    }
    else if(square7 === "X"  && square8 === "X" && square9 === "X")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! X is the Winner!";
    }
    else if(square1 === "X"  && square4 === "X" && square7 === "X")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! X is the Winner!";
    }
    else if(square2 === "X"  && square5 === "X" && square8 === "X")
    { 
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! X is the Winner!";
    }
    else if(square3 === "X"  && square6 === "X" && square9 === "X")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! X is the Winner!";
    }
    else if(square1 === "X"  && square5 === "X" && square9 === "X")
    { 
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! X is the Winner!";
    }
    else if(square3 === "X"  && square5 === "X" && square7 === "X")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! X is the Winner!";
    }
    else if(square1 === "O"  && square2 === "O" && square3 === "O")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! O is the Winner!";
    }
    else if(square4 === "O"  && square5 === "O" && square6 === "O")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! O is the Winner!";
    }
    else if(square7 === "O"  && square8 === "O" && square9 === "O")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! O is the Winner!";
    }
    else if(square1 === "O"  && square4 === "O" && square7 === "O")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! O is the Winner!";
    }
    else if(square2 === "O"  && square5 === "O" && square8 === "O")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! O is the Winner!";
    }
    else if(square3 === "O"  && square6 === "O" && square9 === "O")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! O is the Winner!";
    }
    else if(square1 === "O"  && square5 === "O" && square9 === "O")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! O is the Winner!";
    }
    else if(square3 === "O"  && square5 === "O" && square7 === "O")
    {
        status_msg.classList.add("you-won");
        status_msg.innerHTML = "Congratulations! O is the Winner!";
    }
}

function new_game(gameboard)
{
    document.querySelector(".btn").onclick = function()
    {
        for(let i = 0; i < gameboard.length; i++)
        {
            //gameboard[i].innerHTML = "";
            if(gameboard[i].innerHTML === "X")
            {
                gameboard[i].innerHTML = "";
                gameboard[i].classList.remove("X");
            }
            else if(gameboard[i].innerHTML === "O")
            {
                gameboard[i].innerHTML = "";
                gameboard[i].classList.remove("O");
            }
        }
    } 
}
//play_game();
//console.log(playArray);
