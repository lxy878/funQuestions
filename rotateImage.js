// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// Input:
//     [[1,2,3]
//     [4,5,6]
//     [7,8,9]]
// Output: 
//     [[7,4,1]
//     [8,5,2]
//     [9,6,3]]

function rotateImage(matrix){
    const n = matrix.length
    for(let i=0; i<Math.floor(n/2); i++){
        // access from outside to inside
        for(let j=0; j<Math.ceil(n/2); j++){
            let temp = matrix[i][j]
            // swap left to top
            matrix[i][j] = matrix[n-1-j][i]
            // swap bottom to left
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j]
            // swap right to bottom
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
            // swap top to right
            matrix[j][n-1-i] = temp
        }
    }
}

let i = 1
let n = 7
let matrix = Array(n).fill(0).map(()=> new Array(n).fill(0).map(()=>i++))
console.log(matrix)
rotateImage(matrix)