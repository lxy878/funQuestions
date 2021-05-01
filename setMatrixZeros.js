/* 1.
    1 1 1       1 0 1
    1 0 1  =>   0 0 0
    1 1 1       1 0 1
   2.
    0 1 2 0     0 0 0 0
    3 4 5 0 =>  0 0 0 0
    1 3 1 5     0 3 1 0

    space(m+n), better space(n), m=row.length, n=col.length
*/

// solution:
// visit elements in matrix and save the current colomns if elements is zero
// 

function setMatrixZeros(matrix){
    const cols = Array(matrix[0].length).fill(false)
    for(let row of matrix){
        for(let col=0; col<row.length; col++){
            if(row[col] === 0 && !cols[col]) cols[col] = true
        }
    }
    for(let row=0; row<matrix.length; row++){
        let findZero = false
        // find if 0 in current row and save true 
        for(let col=0; col<matrix[row].length; col++){
            if(matrix[row][col] === 0){
                findZero=true
                break
            }
        }
        // set 0 if current row has zero or col is true
        for(let col=0; col<matrix[row].length; col++){
            if(findZero||cols[col]) matrix[row][col] = 0
        }
    }
    console.log(matrix)
}

setMatrixZeros([[1,1,1],[1,0,1],[1,1,1]])
setMatrixZeros([[0,1,2,1],[3,4,5,0],[1,3,1,5]])