// Given a m x n grid filled with non-negative numbers, 
// find a path from top left to bottom right, 
// which minimizes the sum of all numbers along its path.

// * You can only move either down or right at any point in time

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7

function minPathSum(grid){
    // console.log(minPathSumDP(grid, 0, 0))
    console.log(minPathSumDP2(grid))
}

// memo
function minPathSumDP(grid, i, j, memo={}){
    const key = `${i} ${j}`
    if(memo[key]) return memo[key] 

    if(i==grid.length-1 && j==grid[0].length-1) return grid[i][j]

    if(i==grid.length-1){
        return memo[key] = grid[i][j] + minPathSumDP(grid, i, j+1)
    }
    
    if(j==grid[0].length-1){
        return memo[key] = grid[i][j] + minPathSumDP(grid, i+1, j)
    }

    const min = Math.min(minPathSumDP(grid, i+1, j, memo), minPathSumDP(grid, i, j+1, memo))
    memo[key] = grid[i][j]+min

    return memo[key]
}

// tabulation
function minPathSumDP2(grid){
    const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill())

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            dp[i][j] = grid[i][j]
            if(i>0 && j>0){
                dp[i][j] += Math.min(dp[i-1][j], dp[i][j-1])
            }else if(i>0){
                dp[i][j] += dp[i-1][j]
            }else if(j>0){
                dp[i][j] += dp[i][j-1]
            }
        }
    }
    return dp[dp.length-1][dp[0].length-1]
}

minPathSum([[1,2,3],[4,5,6]])
minPathSum([[1,3,1],[1,5,1],[4,2,1]])