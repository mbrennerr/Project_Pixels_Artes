const pixelBoard = document.querySelector("#pixel-board");
const btnGenerateBoard = document.querySelector('#generate-board');
const btnClearBoard = document.querySelector('#clear-board');
const colors = document.querySelectorAll('.color');




function creatpixelboard (input) {
    for (let index =0; index < input * input; index ++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelBoard.appendChild(pixel);

    }
}

function setCreatPixelBoard(input) {
    pixelBoard.style.gridTemplateColumns = `repeat(${input}, 40px)`;
    pixelBoard.style.gridTemplateRows = `repeat(${input}, 40px)`;
  }

function generateBoard(){
    pixelBoard.innerHTML=" ";
    creatpixelboard(5);
    setCreatPixelBoard(5);
}



window.onload = () => {
    btnGenerateBoard.addEventListener("click", generateBoard() );
}