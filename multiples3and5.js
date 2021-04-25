// Find the sum of all the multiples of 3 or 5 below 1000

const sum = (n) =>{
    let sum = 0
    for(let i=0; i<n; i++){
        if(i%5===0 || i%3===0) sum += i
    }
    return sum
}

console.log(sum(10))
console.log(sum(1000))