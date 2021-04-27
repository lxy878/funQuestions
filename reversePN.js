// Evaluate Reverse Polish Notation
// ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
// ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6


function reversePN(arr){
    const stack = []
    const op = '+-/*'
    for(let s of arr){
        if(!op.includes(s)){
            stack.push(parseInt(s))
        }else{
            const n2 = stack.pop()
            const n1 = stack.pop()
            switch (s) {
                case '+':
                    stack.push(n1+n2)
                    break;
                
                case '-':
                    stack.push(n1-n2)
                    break;

                case '*':
                    stack.push(n1*n2)
                    break;

                case '/':
                    stack.push(n1/n2)
                    break;
            }
        }
    }
    return stack.pop()
}

console.log(reversePN(["2", "1", "+", "3", "*"]))
console.log(reversePN(["4", "13", "5", "/", "+"]))