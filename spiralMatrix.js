// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// return [1,2,3,6,9,8,7,4,5]

function spiralMatrix(matrix){
    const result = []
    const rows = matrix.length, cols = matrix[0].length
    let left = 0, right = cols-1, top=0, bottom = rows-1
    
    while(result.length<rows*cols){
        for(let i =left; i<=right; i++){
            result.push(matrix[top][i])
        }
        top++

        for(let i =top; i<=bottom; i++){
            result.push(matrix[i][right])
        }
        right--

        if(bottom<top) break

        for(let i =right; i>=left; i--){
            result.push(matrix[bottom][i])
        }
        bottom--
        
        if(right<left) break
        
        for(let i =bottom; i>=top; i--){
            result.push(matrix[i][left])
        }
        left++  
    }
    return result
}

console.log(spiralMatrix([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))