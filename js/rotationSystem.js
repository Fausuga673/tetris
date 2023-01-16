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

function superRotationSystem(tetrominoWallKickData) {

    lastRow -= tetrominos[selected][rotation].length;

    Object.values(tetrominos[selected][rotation]).forEach(TetrominoRow => {
        Object.keys(TetrominoRow).forEach(TetrominoCol => {
            if (TetrominoRow[TetrominoCol] != 0) {
                checkRotation.push({row: lastRow, col: (parseInt(TetrominoCol)+col)});
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