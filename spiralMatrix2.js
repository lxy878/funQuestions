// Given an integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order. 
// Input n = 4
// output: [
//     [1,   2,  3, 4], 
//     [12, 13, 14, 5], 
//     [11, 16, 15, 6], 
//     [10,  9,  8, 7]
//     ]

function spiralMatrix2(n){
    const matrix = Array(n).fill().map(()=>Array(n).fill(0))
    let left = 0, right=matrix[0].length-1, top=0, bottom=matrix.length-1, k=1
    while(k<=n*n){
        // top: left to right
        for(let i=left; i<=right; i++){
            matrix[top][i]=k;
            k++;
        }
        top++;
        // right: top to bottom 
        for(let i=top; i<=bottom; i++){
            matrix[i][right]=k;
            k++;
        }
        right--;
         // bottom: right to left
        for(let i=right; i>=left; i--){
            matrix[bottom][i]=k;
            k++;
        }
        bottom--;
        // left: bottom to top
        for(let i=bottom; i>=top; i--){
            matrix[i][left]=k;
            k++;
        }
        left++;
    }
    // console.log(matrix)
    return matrix
}

console.log(spiralMatrix2(4))