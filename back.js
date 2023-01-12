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
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
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
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0]
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
    [[ 0, 0], [-1, 0], [-1,+1], [ 0,-2], [-1,-2]],
    [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
    [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
    [[ 0, 0], [-1, 0], [-1,+1], [ 0,-2], [-1,-2]],
    [[ 0, 0], [+1, 0], [+1,+1], [ 0,-2], [+1,-2]],
    [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]],
    [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]],
    [[ 0, 0], [+1, 0], [+1,+1], [ 0,-2], [+1,-2]]
];

const I_TetriminoWallKickData = [
    [[ 0, 0], [-1, 0], [-1,+1], [ 0,-2], [-1,-2]],
    [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
    [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
    [[ 0, 0], [-1, 0], [-1,+1], [ 0,-2], [-1,-2]],
    [[ 0, 0], [+1, 0], [+1,+1], [ 0,-2], [+1,-2]],
    [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]],
    [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]],
    [[ 0, 0], [+1, 0], [+1,+1], [ 0,-2], [+1,-2]]
];

const O_TetriminoWallKickData = [
];

const scene = document.getElementById('scene');

let row = 0;
let col = 0;
let color = 1;
let selected = 1;
let rotation = 0;
let positions = [];
let occupiedPositions = [];

function getTetrimino() {
    Object.values(tetriminos[selected][rotation]).forEach(tetriminoRow => {
        //obtenemos la posición de cada columna
        Object.keys(tetriminoRow).forEach(tetriminoCol => {
            // si el valor de la columna es diferente de 0
            if (tetriminoRow[tetriminoCol] != 0) {
                // insertamos el tetrimino en el tablero de juego con un color aleatorio
                board[row][parseInt(tetriminoCol)+col] = 5;
                positions.push({row, col: (parseInt(tetriminoCol)+col)});
            }
        });
        row++;
    });
}

function genereteTetrimino(){
    // devuelve número del 0 al 6
    col = Math.floor(Math.random()*6);
    // devuelve número del 1 al 7
    color = Math.floor(Math.random() * 7 ) + 1;
    // devuelve número del 0 al 7
    /* selected = Math.floor(Math.random() * 6 ); */

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
        if ((positionsRow.includes(bottomEdgeOfTheBoard) == false) && 
            (bottom.some(elem => occupiedPositions.includes(elem)) == false)) 
            {row++;} 
        else {
                row = 0;
                rotation = 0;
                positions = [];
                genereteTetrimino();
                drawTetrimino();
            }
    }

    if ((instruction == 'right') && 
        (positionsCol.includes(rightEdgeOfTheBoard) == false) && 
        (right.some(elem => occupiedPositions.includes(elem)) == false)) 
        {col++;} 
    
    if ((instruction == 'left') && 
        (positionsCol.includes(leftEdgeOfTheBoard) == false) && 
        (left.some(elem => occupiedPositions.includes(elem)) == false)) 
        {col--;}

    if (instruction == 'rotate') {
        if (rotation < 3) {
            rotation++ ;  
        } else {
            rotation = 0;
        }
    }

    positions.forEach(e => board[e.row][e.col] = 0); 
    positions=[];
    scene.innerHTML = '';
    
    row -= tetriminos[selected][rotation].length;

    getTetrimino();
    drawTetrimino();
}

function controller(e){
    if (e.key == 'ArrowUp') moveTetrimino('rotate');
    if (e.key == 'ArrowDown') moveTetrimino('fall');;
    if (e.key == 'ArrowRight') moveTetrimino('right');
    if (e.key == 'ArrowLeft') moveTetrimino('left');
}

/* const fall = setInterval(()=> {
    moveTetrimino('fall');
}, 300); */

window.addEventListener('keydown', controller);