//"use strict";

//document.addEventListener("DomContentLoaded", function(){
function start (){
    let drawBoard = document.getElementById("board").children;
    for(let i = 0; i < drawBoard.length; i++)
    {
        drawBoard[i].setAttribute("class", "square");
        //console.log(drawBoard[i]);
    }
    //console.log(drawBoard);
}
window.onload = start;
