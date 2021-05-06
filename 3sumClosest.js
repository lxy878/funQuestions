// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
// Return the three integers. You may assume that each input would have exactly one solution.


function _3sumClosest(nums, target){
    let minDiff = Number.MAX_SAFE_INTEGER
    let result = 0
    nums.sort((a,b)=> a-b)

    // console.log(nums)

    for(let i=0; i<nums.length; i++){
        let k = nums.length-1
        let j = i + 1
        while(j<k){
            const sum = nums[i] + nums[j]+nums[k]
            const diff = Math.abs(sum-target)
            if(diff === 0) return [nums[i], nums[j], nums[k]]
            if(diff < minDiff) {
                minDiff = diff
                result = [nums[i], nums[j], nums[k]]
            }

            if(sum < target){
                j++
            }else{
                k--
            }
        }
    }
    return result
}

console.log(_3sumClosest([-21,1,0,30,-19,4,-15], 2))
console.log(_3sumClosest([-1, 2, 1, -4], 1))