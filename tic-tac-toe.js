//"use strict";

//document.addEventListener("DomContentLoaded", function(){
function start (){
    let drawBoard = document.getElementById("board").children;
    for(let i = 0; i < drawBoard.length; i++)
    {
        drawBoard[i].setAttribute("class", "square");
    }
    //const playArray = new Array();
    play_game();
    //console.log(playArray);
}
window.onload = start;



/*function play(){
    let makePlay = document.getElementById("board").querySelectorAll('.square');
    for(let i = 0; i < makePlay.length; i++)
    {
        if(playArray.length === 0)
        {
            makePlay[i].innerHTML = "X";
            makePlay[i].setAttribute("class","X");
            playArray.push('X');
        }
        else
        {
            if(playArray[playArray.length-1] === 'X')
            {
                makePlay[i].innerHTML = "O";
                makePlay[i].setAttribute("class","O");
                playArray.push('O');
            }
            else if(playArray[playArray.length-1] === 'O')
            {
                makePlay[i].innerHTML = "X";
                makePlay[i].setAttribute("class","X");
                playArray.push('X');
            }
        }
    }
}*/
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
            }
        }
    }
}

//play_game();
console.log(playArray);
