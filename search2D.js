// find a value in an m x n matrix, return boolean
// Properties:
// 1) Integers in each row are sorted from left to right. 
// 2) The first integer of each row is greater than the last integer of the previous row.

function search2D(matrix, target){
    const rows = matrix.length, cols = matrix[0].length
    let begin = 0, end = rows * cols - 1

    while(begin<=end){
        const mid = Math.floor((begin+end)/2)
        // [mid/cols]+[mid%cols]
        const i = Math.floor(mid/cols)
        const j = mid%cols
        if(matrix[i][j] == target){
            return true
        }else if(matrix[i][j] > target){
            end = mid-1
        }else{
            begin = mid+1
        }
    }
    return false
}

console.log(search2D([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))