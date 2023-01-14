let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const tetriminos = [
    // I = 0
    [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ],
    // L = 1
    [
        [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1]
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ]
    ],
    // J = 2
    [
        [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0]
        ],
        [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ]
    ],
    // O = 3
    [
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ],
    // S = 4
    [
        [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1]
        ],
        [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0]
        ],
        [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0]
        ]
    ],
    // T = 5
    [
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [0, 1, 0]
        ]
    ],
    // Z = 6
    [
        [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1]
        ],
        [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1]
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [1, 0, 0]
        ]
    ]
];

const JLSTZ_TetrominoWallKickData = [
    // 0
    [[ 0, 0], [ 0,-1], [ 0,+1], [ 0,-1], [ 0,+1]],
    // R
    [[ 0, 0], [ 0,-1], [-1,-1], [+2, 0], [+2,-1]],
    // 2
    [[ 0, 0], [-1,+1], [-1,-1], [ 0,+1], [ 0,-1]],
    // L
    [[ 0, 0], [ 0,+1], [-1,+1], [+2, 0], [+2,+1]]
];

const I_TetrominoWallKickData = [
    // 0
    [[ 0, 0], [ 0,-1], [ 0,+2], [ 0,-1], [0, +2]],
    // R
    [[ 0,-1], [ 0, 0], [ 0, 0], [+1, 0], [-2, 0]],
    // 2
    [[+1,+1], [-1,+1], [-1,-2], [ 0,+1], [ 0,-2]],
    // L
    [[-1, 0], [-1, 0], [-1, 0], [+1, 0], [-2, 0]]
];

const scene = document.getElementById('board');
const next = document.getElementById('next');
const holdTetro = document.getElementById('hold');

let row = 0;
let col = 0;
let color = 1;
let selected = 0;
let rotation = 0;
let positions = [];
let occupiedPositions = [];

let lastRotation = 0;
let counter = 0;
let lastRow = 0;
let checkRotation = [];

let firstBag = [0, 1, 2, 3, 4, 5, 6];
let secondBag = [];

firstBag = firstBag.sort(function() {return Math.random() - 0.5});

function getTetrimino() {
    Object.values(tetriminos[selected][rotation]).forEach(tetriminoRow => {
        //obtenemos la posición de cada columna
        Object.keys(tetriminoRow).forEach(tetriminoCol => {
            // si el valor de la columna es diferente de 0
            if (tetriminoRow[tetriminoCol] != 0) {
                // insertamos el tetrimino en el tablero de juego con un color aleatorio
                board[row][parseInt(tetriminoCol)+col] = color;
                positions.push({row, col: (parseInt(tetriminoCol)+col)});
            }
        });
        row++;
        lastRow = row;
    });
}

function selectPiece() {
    if (firstBag.length == 2) {
        // toma el primer elemento de "firstBag"
        selected = firstBag.shift();
        // este mismo elemento es insertado en "secondbag"
        secondBag.push(selected);
        secondBag = secondBag.sort(function() {return Math.random() - 0.5});

        secondBag.forEach(piece => {
            firstBag.push(piece);
        });
        secondBag = [];
    } else {
        // toma el primer elemento de "firstBag"
        selected = firstBag.shift();
        // este mismo elemento es insertado en "secondbag"
        secondBag.push(selected);
    }
}

function genereteTetrimino(){

    // devuelve número del 0 al 6
    col = Math.floor(Math.random()*6);
    // devuelve número del 1 al 7
    color = Math.floor(Math.random() * 7 ) + 1;

    next.innerHTML = '';
    selectPiece();

    // se identifican las posiciones ocupadas antes de crear un nuevo tetrimino
    for (let row = 0; row < board.length; row++) {
        Object.keys(board[row]).forEach(col =>{
            if (board[row][col] != 0) {
                occupiedPositions.push(`${row + col}`);
            }
        });
    }

    getTetrimino();
}

function drawTetrimino() {
    // por cada elemento diferente a 0 dentro de "board" creamos un div
    for (let row = 0; row < board.length; row++) {
        Object.keys(board[row]).forEach(col =>{
            if (board[row][col] != 0 && board[row][col] != 8) {
                let newtetrimino = document.createElement('div');
                newtetrimino.setAttribute('class', `square c${board[row][col]}`);
                scene.appendChild(newtetrimino);

                // para darle forma a los tetriminos
                // multiplicamos el alto por la fila correspondiente
                // le restamos la altura*2 para que de esta forma se generen encima del tablero
                newtetrimino.style.top = ((newtetrimino.offsetHeight * row) - (newtetrimino.offsetHeight * 2)) + 'px';
                // multiplicamos el ancho por la columna correspondiente
                newtetrimino.style.left = (newtetrimino.offsetWidth * parseInt(col)) + 'px';
            }
        });
    }

    // dibujamos el tetrimino que sigue
    Object.keys(tetriminos[firstBag[0]][0]).forEach(row2 => {
        Object.keys(tetriminos[firstBag[0]][0][row2]).forEach(col2 => {
            if (tetriminos[firstBag[0]][0][row2][col2] != 0) {
                
                let minisquare = document.createElement('div');
                minisquare.setAttribute('class', `minisquare c0`);
                next.appendChild(minisquare);

                minisquare.style.top = (minisquare.offsetHeight * parseInt(row2)) + 'px';
                minisquare.style.left = (minisquare.offsetWidth * parseInt(col2)) + 'px';

            }
        })
    });
}

function superRotationSystem(tetrominoWallKickData) {

    lastRow -= tetriminos[selected][rotation].length;

    Object.values(tetriminos[selected][rotation]).forEach(tetriminoRow => {
        Object.keys(tetriminoRow).forEach(tetriminoCol => {
            if (tetriminoRow[tetriminoCol] != 0) {
                checkRotation.push({row: lastRow, col: (parseInt(tetriminoCol)+col)});
            }
        });
        lastRow++;
    });

    tetrominoWallKickData[rotation].every(test => {

        let checkRotationRow = [checkRotation[0].row + test[0], checkRotation[1].row + test[0], checkRotation[2].row + test[0], checkRotation[3].row + test[0]];
        let checkRotationCol = [checkRotation[0].col + test[1], checkRotation[1].col + test[1], checkRotation[2].col + test[1], checkRotation[3].col + test[1]];

        if ((checkRotation.some(check => occupiedPositions.includes(`${check.row + test[0]}${check.col + test[1]}`)) == false) &&
            (checkRotationRow.includes(-1) == false && checkRotationRow.includes(22) == false) &&
            (checkRotationCol.includes(-1) == false && checkRotationCol.includes(10) == false)) 
        {

            row = row + test[0];
            col = col + test[1];
            counter = 0;
            return false;

        } 
             
        else {

            counter++;
            return true;
            
        }
      
    });

    if (counter >= 5) rotation = lastRotation;


}

genereteTetrimino();
drawTetrimino();

function moveTetrimino(instruction){

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
        if ((positionsRow.includes(bottomEdgeOfTheBoard) == false) && (bottom.some(elem => occupiedPositions.includes(elem)) == false)) {
            row++;
        } else {
            canBeHold = true;

            row = 0;
            rotation = 0;
            counter = 0;
            positions = [];
            genereteTetrimino();
            drawTetrimino();
        }
    }

    if ((instruction == 'right') && (positionsCol.includes(rightEdgeOfTheBoard) == false) && (right.some(elem => occupiedPositions.includes(elem)) == false)) 
        {col++;} 
    
    if ((instruction == 'left') && (positionsCol.includes(leftEdgeOfTheBoard) == false) && (left.some(elem => occupiedPositions.includes(elem)) == false)) 
        {col--;}

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

    }

    positions.forEach(e => board[e.row][e.col] = 0); 
    positions=[];
    checkRotation = [];
    scene.innerHTML = '';
    
    row -= tetriminos[selected][rotation].length;

    getTetrimino();
    drawTetrimino();
}

function controller(e){
    if (e.key == 'k') moveTetrimino('rotateR');
    if (e.key == 'j') moveTetrimino('rotateL');
    if (e.key == 's') moveTetrimino('fall');;
    if (e.key == 'd') moveTetrimino('right');
    if (e.key == 'a') moveTetrimino('left');
}

/* const fall = setInterval(()=> {
    moveTetrimino('fall');
}, 300); */

window.addEventListener('keydown', controller);