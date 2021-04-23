// Rotate an array of n elements to the right by k steps
// Example: k=3, [1,2,3,4,5,6] -> [4,5,6,1,2,3]

// consider: 
    // [], k <=0

// soluation: 
// 1. reverse the order of all element
// 2. reverse the first k number of elements
// 3. reverse the n - k number of elements

function rotateArray(arr, k){
    if(k<1 || arr.length == 0) return null
    
    if(k>arr.length) k %= arr.length
    reverse(arr, 0, arr.length-1)
    reverse(arr, 0, k-1)
    reverse(arr, k, arr.length-1)
    console.log(arr)
}

const reverse = (arr, l, r)=>{
    while(l<r){
        const t = arr[l]
        arr[l] = arr[r]
        arr[r] = t
        l++
        r--
    }
}
rotateArray([1,2,3,4,5], 2)
rotateArray([1,2,3,4,5], 8)