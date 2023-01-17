const scene = document.getElementById('board');
const message = document.getElementById('gameover');
const button = document.getElementById('playagain');
const score = document.getElementById('score');
const next = document.getElementById('next');
const hold = document.getElementById('hold');
const keyboard = document.getElementsByClassName('key');

let row = 0;
let col = 0;
let color = 1;
let index = 0;
let selected = 0;
let rotation = 0;
let positions = [];
let occupiedPositions = [];

let lastRotation = 0;
let counter = 0;
let lastRow = 0;
let checkRotation = [];

let canBeHold = true;
let holdedTetromino = 0;

let firstBag = [0, 1, 2, 3, 4, 5, 6];
let secondBag = [0, 1, 2, 3, 4, 5, 6];

firstBag = firstBag.sort(function() {return Math.random() - 0.5});

function getTetromino() {
    Object.values(tetrominos[selected][rotation]).forEach(TetrominoRow => {
        //obtenemos la posición de cada columna
        Object.keys(TetrominoRow).forEach(TetrominoCol => {
            // si el valor de la columna es diferente de 0
            if (TetrominoRow[TetrominoCol] != 0) {
                // insertamos el Tetromino en el tablero de juego con un color aleatorio
                board[row][parseInt(TetrominoCol)+col] = color;
                positions.push({row, col: (parseInt(TetrominoCol)+col)});
            }
        });
        row++;
        lastRow = row;
    });
}

function identifyOccupiedPositions() {
    // se identifican las posiciones ocupadas antes de crear un nuevo Tetromino
    for (let row = 0; row < board.length; row++) {
        Object.keys(board[row]).forEach(col =>{
            if (board[row][col] != 0) {
                occupiedPositions.push(`${row + col}`);
            }
        });
    }
}

function addPoint() {

    occupiedPositions = [];
    
    Object.keys(board).forEach(boardRow => {
        if (board[boardRow].indexOf(0) == -1) {

            score.innerHTML = parseInt(score.textContent) + 1;

            board.splice(boardRow, 1);
            board.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
    });
    
    identifyOccupiedPositions();
}

function gameOver() {
    board.every((boardRow, index) => {
        if (index == 9) {
            message.style.display = 'flex';
            scene.append(message);
            clearInterval(fall);
            Object.values(keyboard).forEach(e => e.removeEventListener('click', controllerMovil));
            window.removeEventListener('keyup', controller);
            return false;
        }

        if (boardRow.some(boardCol => boardCol != 0 )) {
            return true;
        }
    })
}

function selectPiece() {
    if (firstBag.length == 2) {
        // toma el primer elemento de "firstBag"
        selected = firstBag.shift();

        secondBag = secondBag.sort(function() {return Math.random() - 0.5});
        secondBag.forEach(piece => {
            firstBag.push(piece);
        });
    } else {
        // toma el primer elemento de "firstBag"
        selected = firstBag.shift();
    }
}

function holdTetromino() {

    if (canBeHold == true) {

        if (hold.childNodes.length > 0) {
            canBeHold = false;
            firstBag.unshift(holdedTetromino);
            holdedTetromino = selected;
        } else {
            canBeHold = false;
            holdedTetromino = selected;
        }
        
        scene.innerHTML = '';
        hold.innerHTML = '';
        
        positions.forEach(e => board[e.row][e.col] = 0);
        row = 0;
        rotation = 0;
        counter = 0;
        positions = [];
        genereteTetromino();
        drawTetromino();
       
        // dibujamos el Tetromino que guardamos en "hold"
        Object.keys(tetrominos[holdedTetromino][0]).forEach(row2 => {
            Object.keys(tetrominos[holdedTetromino][0][row2]).forEach(col2 => {
                if (tetrominos[holdedTetromino][0][row2][col2] != 0) {
                    
                    let minisquare = document.createElement('div');
                    minisquare.setAttribute('class', `minisquare c0`);
                    hold.appendChild(minisquare);

                    minisquare.style.top = (minisquare.offsetHeight * parseInt(row2)) + 'px';
                    minisquare.style.left = (minisquare.offsetWidth * parseInt(col2)) + 'px';

                }
            })
        });
    }

}

function genereteTetromino(){

    // devuelve número del 0 al 6
    col = Math.floor(Math.random()*6);
    // devuelve número del 1 al 7
    color = Math.floor(Math.random() * 7 ) + 1;

    next.innerHTML = '';
    selectPiece();
    identifyOccupiedPositions();
    getTetromino();
}

function drawTetromino() {
    // por cada elemento diferente a 0 dentro de "board" creamos un div
    for (let row = 0; row < board.length; row++) {
        Object.keys(board[row]).forEach(col =>{
            if (board[row][col] != 0 && board[row][col] != 8) {
                let newTetromino = document.createElement('div');
                newTetromino.setAttribute('class', `square c${board[row][col]}`);
                scene.appendChild(newTetromino);

                // para darle forma a los tetrominos
                // multiplicamos el alto por la fila correspondiente
                // le restamos la altura*2 para que de esta forma se generen encima del tablero
                newTetromino.style.top = ((newTetromino.offsetHeight * row) - (newTetromino.offsetHeight * 2)) + 'px';
                // multiplicamos el ancho por la columna correspondiente
                newTetromino.style.left = (newTetromino.offsetWidth * parseInt(col)) + 'px';
            }
        });
    }

    // dibujamos el Tetromino que sigue
    Object.keys(tetrominos[firstBag[0]][0]).forEach(row2 => {
        Object.keys(tetrominos[firstBag[0]][0][row2]).forEach(col2 => {
            if (tetrominos[firstBag[0]][0][row2][col2] != 0) {
                
                let minisquare = document.createElement('div');
                minisquare.setAttribute('class', `minisquare c0`);
                next.appendChild(minisquare);

                minisquare.style.top = (minisquare.offsetHeight * parseInt(row2)) + 'px';
                minisquare.style.left = (minisquare.offsetWidth * parseInt(col2)) + 'px';

            }
        })
    });
}

genereteTetromino();
drawTetromino();

function moveTetromino(instruction){

    const leftEdgeOfTheBoard = 0;
    const rightEdgeOfTheBoard = 9;
    const bottomEdgeOfTheBoard = 21;

    let top = [];
    let right = [];
    let bottom = [];
    let left = [];

    positions.forEach(e => {
        top.push(`${e.row-1}${e.col}`);
        bottom.push(`${e.row+1}${e.col}`);
        right.push(`${e.row}${e.col+1}`);
        left.push(`${e.row}${e.col-1}`);
    });

    let positionsRow = [positions[0].row, positions[1].row, positions[2].row, positions[3].row];
    let positionsCol = [positions[0].col, positions[1].col, positions[2].col, positions[3].col];

    if (instruction == 'fall') {
        if ((positionsRow.includes(bottomEdgeOfTheBoard) == false) && 
            (bottom.some(elem => occupiedPositions.includes(elem)) == false)) {
            row++;
            
            scene.innerHTML = '';
        } else {

            addPoint();
            
            canBeHold = true;
            row = 0;
            rotation = 0;
            counter = 0;
            positions = [];
            genereteTetromino();
            drawTetromino();
            
            scene.innerHTML = '';
            gameOver();

        }
    }

    if ((instruction == 'right') && (positionsCol.includes(rightEdgeOfTheBoard) == false) && 
        (right.some(elem => occupiedPositions.includes(elem)) == false)) 
        {
            col++;
            
            scene.innerHTML = '';
        } 
    
    if ((instruction == 'left') && (positionsCol.includes(leftEdgeOfTheBoard) == false) && 
        (left.some(elem => occupiedPositions.includes(elem)) == false)) 
        {
            col--;
            
            scene.innerHTML = '';
        }

    if (instruction == 'rotateR') {

        lastRotation = rotation;

        if (rotation < 3) {

            rotation++ ;  
            if (selected == 0) superRotationSystem(I_TetrominoWallKickData);
            else superRotationSystem(JLSTZ_TetrominoWallKickData);

        } else {

            rotation = 0;
            if (selected == 0) superRotationSystem(I_TetrominoWallKickData);
            else superRotationSystem(JLSTZ_TetrominoWallKickData);

        }

        
        scene.innerHTML = '';

    }

    if (instruction == 'rotateL') {

        lastRotation = rotation;

        if (rotation > 0) {

            rotation--;
            if (selected == 0) superRotationSystem(I_TetrominoWallKickData);
            else superRotationSystem(JLSTZ_TetrominoWallKickData);
            
        } else {

            rotation = 3;
            if (selected == 0) superRotationSystem(I_TetrominoWallKickData);
            else superRotationSystem(JLSTZ_TetrominoWallKickData);

        }

        
        scene.innerHTML = '';

    }

    positions.forEach(e => board[e.row][e.col] = 0); 
    positions=[];
    checkRotation = [];
    
    row -= tetrominos[selected][rotation].length;

    getTetromino();
    drawTetromino();
}

function controller(e){
    if (e.key == 'k') moveTetromino('rotateR');
    if (e.key == 'j') moveTetromino('rotateL');
    if (e.key == 's') moveTetromino('fall');;
    if (e.key == 'd') moveTetromino('right');
    if (e.key == 'a') moveTetromino('left');
    if (e.key == 'h') holdTetromino();
}

function controllerMovil(key) {
    if (key.target.id == 'k') moveTetromino('rotateR');
    if (key.target.id == 'j') moveTetromino('rotateL');
    if (key.target.id == 's') moveTetromino('fall');;
    if (key.target.id == 'd') moveTetromino('right');
    if (key.target.id == 'a') moveTetromino('left');
    if (key.target.id == 'h') holdTetromino();
}

const fall = setInterval(()=> {
    moveTetromino('fall');
}, 1000);

button.addEventListener('click', ()=> {
    location.reload();
})

Object.values(keyboard).forEach(e => e.addEventListener('click', controllerMovil));

window.addEventListener('keyup', controller);