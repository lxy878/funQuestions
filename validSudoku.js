// fill cells that need to be validated according to the following rules:

// * Each row must contain the digits 1-9 without repetition.
// * Each column must contain the digits 1-9 without repetition.
// * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

function validSudoku(board){
    if(!board ||board.length < 9 || board[0].length < 9) return false
    
    // check by rows
    for(let r of board){
        const record = {}
        for(let p of r){
            if(p !== '.'){
                if(record[p]) return false
                record[p] = true
            }
        }
    }

    // check by cols
    for(let i=0; i<board.length; i++){
        const record = {}
        for(let j=0; j<board[0].length; j++){
            if (board[j][i] !== '.'){
                if(record[board[j][i]]) return false
                record[board[j][i]] = true
            }
        }
    }

    // check by 3X3
    for(let q=0; q<9; q++){
        const record = {}
        for(let i=Math.floor(q/3)*3; i<Math.floor(q/3)+3; i++){
            for(let j= q%3*3; j<q%3+3; j++){
                if(board[i][j] !== '.'){
                    if(record[board[i][j]]) return false
                    record[board[i][j]] = true
                }
            }
        }
    }
    return true
}

console.log(validSudoku([
    ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]))

console.log(validSudoku([
    ["8","8","8","8","8",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]))

console.log(validSudoku([
    ["5","3",".",".","7",".",".",".","."]
    ,["5",".",".","1","9","5",".",".","."]
    ,["5","9","8",".",".",".",".","6","."]
    ,["5",".",".",".","6",".",".",".","3"]
    ,["5",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]))