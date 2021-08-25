/**
 * @param {string} digits
 * @return {string[]}
 */

// digits >= 0 && digits<=4
// [2,9]
var letterCombinations = function(digits) {
    const letters = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    if(digits.length === 0) return []
    let result = []
    for(let d=0; d<digits.length; d++){
        let digit = digits[d]
        let sub =  letters[parseInt(digit)-2].split("")
        if(result.length === 0){
            result = sub
            continue
        }
        const t = []
        for(let l of sub){
            for(let s of result){
                t.push(s+l)
            }
        }
        result = t
    }
    
    return result
};

module.exports = letterCombinations