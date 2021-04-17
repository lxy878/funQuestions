// Given an array of integers numbers that is already sorted in ascending order. Return indices
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

const twoSum2 = function(nums, target){
    let i = 0, j = nums.length-1
    while(i<j){
        const sum = nums[i] + nums[j]
        if(sum<target){
            i++
        }else if(sum>target){
            j--
        }else{
            return [i+1, j+1]
        }
    }
    return null
}

console.log(twoSum2([2,7,11,15], 9))