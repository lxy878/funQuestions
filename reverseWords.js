// Given an input string, reverse the string word by word.
// Example: "the sky is blue" -> "blue is sky the"

function reverseWords(s){
    const words = s.split(' ')
    for(let i=0; i<words.length/2; i++){
        const temp = words[i]
        words[i] = words[words.length-i-1]
        words[words.length-i-1] = temp
    }
    return words.join(' ')
}

console.log(reverseWords('the sky is blue'))