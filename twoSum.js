
// const sum = function(nums, target, memo={}) {
//     if (target in memo) return memo[target]
//     if (target === 0) return [];
//     if (target < 0) return null;
    
//     for(let i=0; i<nums.length; i++){
//          let remain = target - nums[i]
//          const result = twoSum([...nums.slice(i+1)], remain, memo)
         
//          if(result){
//             result.push(nums[i])
//             memo[target] = result
//             return memo[target]
//          }
//     }
//     return null
// };

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Example: 
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

const twoSum = function(nums, target){
    const pair = {}
    for(let i=0; i<nums.length; i++){
        const remain = target - nums[i]
        if(nums[i] in pair){
            pair[nums[i]].push(i)
            return pair[nums[i]]
        }
        pair[remain] = [i]
    }
    return null
}

console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,2,4], 100))
console.log(twoSum([3,2,4,4,1,2,3,4,5], 6))
console.log(twoSum([2,7,11,15], 9))