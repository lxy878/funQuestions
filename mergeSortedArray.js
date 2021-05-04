
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively. 
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

function mergeSortedArray(nums1, m, nums2, n){
    let i1 = m-1, i2 = n-1
    let k = m+n-1
    while(k>=0){
        // i2<0: all n's in nums2 had been replaced
        // i1 >=0: prevent nums1 index error and nums2 still has more n's left 
        if(i2<0 ||(i1 >=0 && nums1[i1]>nums2[i2]))
            nums1[k--] = nums1[i1--]
        else
            nums1[k--] = nums2[i2--]
    }
    return nums1
}

console.log(mergeSortedArray([1,2,3,0,0,0],3,[2,5,6],3))
console.log(mergeSortedArray([1],1,[],0))