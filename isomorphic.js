// Given two strings s and t, determine if they are isomorphic. 
// Two strings are isomorphic if the characters in s can be replaced to get t.
// For example,"egg" and "add" are isomorphic, "foo" and "bar" are not.

// conditions:
    // s1 == s2
    // the frequence of characters in s1 equals the frequence of characters in s2

// solution:
// using two hash to store the characters of s1 and s2
// iterate [0...n] of s1 or s2:
    
const isIsomorphic = function(s, t) {
    if(s.length != t.length) return false
    
    const a = {}, b={}
    
    for(let i=0; i<s.length; i++){
        if(a[s.charAt(i)]){
            if(b[t.charAt(i)]!=s.charAt(i)) {
                return false
            }
        }else{
            if(b[t.charAt(i)]) return false
            a[s.charAt(i)] = t.charAt(i)
            b[t.charAt(i)] = s.charAt(i)
        }
        // console.log(s.charAt(i))
    }
    return true;
};

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic("bbbaaaba","aaabbbba"))