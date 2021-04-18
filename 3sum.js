// Given an array S of n integers. Find all unique triplets in the array which gives the sum of ZERO.
// S = {-1 0 1 2 -1 -4} -> [(-1, 0, 1), (-1, -1, 2)]

function _3sum(nums){
    nums.sort((a,b)=> a-b)
    console.log(nums)
    const results = []
    for(let i=0; i<nums.length; i++){
        if(i>0 && nums[i-1] == nums[i]) continue
        let j = i+1, l = nums.length-1;
        while(j<l){
            if(l< nums.length-1 && nums[l] == nums[l+1]) {
                l--;
                continue
            }
            const sum = nums[i]+nums[j]+nums[l]
            if(sum < 0){
                j++
            }else if(sum > 0){
                l--
            }else{
                results.push([nums[i], nums[j], nums[l]])
                j++;
                l--;
            }
        }
    }
    return results
}


console.log(_3sum([-1, 0, 1, 2, -1, -4]))
console.log(_3sum([-1, 0, 1, 2, -1, -4, 2, 1]))
console.log(_3sum([-2, 0, 0, 2, 2]))