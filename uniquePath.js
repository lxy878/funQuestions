// A robot is located at the top-left corner of a m x n grid
// The robot can only move either down or right at any point in time. 
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

// Input: m = 3, n = 7
// Output: 28

function uniquePath(m, n){
    console.log(uniquePathDP(m-1,n-1))
}

// memo
function uniquePathDP(m,n,memo={}){
    const key = `${m} ${n}`
    if(memo[key]) return memo[key]
    if(m==0 && n==0) return memo[key] = 1
    if(m==0) return memo[key] = uniquePathDP(m,n-1, memo)
    if(n==0) return memo[key] = uniquePathDP(m-1,n,memo)
    
    memo[key] = uniquePathDP(m-1, n, memo)+uniquePathDP(m,n-1, memo)

    return memo[key]
}

uniquePath(3,7)
uniquePath(3,3)