// [[2,6],[1,3],[7,8],[8,16],[15,18]] -> [[1,6],[7,18]]

// solution: 
// sort by elements[0] 
// compare merged last[1] and cur[0]
//  if merged last[1] > cur[0], merge
//  else add to merge list

var merge = function(intervals) {
    intervals.sort((a, b) => a[0]-b[0])
    const merged = []
    for(let interval of intervals){
        if(merged.length == 0 || merged[merged.length-1][1]<interval[0]){
            merged.push(interval)
        }else{
            merged[merged.length-1][1] = Math.max(interval[1],merged[merged.length-1][1])
        }
    }
    return merged
};

console.log(merge([[2,6],[1,3],[7,8],[8,16],[15,18]]))
console.log(merge([[1,4],[2,3]]))