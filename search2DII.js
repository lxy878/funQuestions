// Write an efficient algorithm that searches for a value in an m x n matrix.
// following properties:
//  * Integers in each row are sorted in ascending from left to right.
//  * Integers in each column are sorted in ascending from top to bottom.

// input:
// [
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ], 14
// output: true

function search2DII(matrix, target){
    const m = matrix.length-1
    let i = matrix[0].length-1
    let j = 0

    while(i>=0 && j<=m){
        if(matrix[i][j]>target){
            i--
        }else if(matrix[i][j]<target){
            j++
        }else{
            return true
        }
    }
    return false
}

console.log(search2DII(
    [[1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]], 14))