// kth largest element in an array
// For example, given [3,2,1,5,6,4] and k = 2, return 5.

// Note: sort first

function kth(nums,k){
    return nums.sort((a,b)=> a-b)[nums.length-k]
}

console.log(kth([3,2,1,5,6,4], 2))