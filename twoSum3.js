// create a TwoSum class:
// TwoSum() Initializes the TwoSum object, with an empty array initially.
// void add(int number) Adds number to the data structure.
// boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.


// add(1); 
// add(3); 
// add(5);
// find(4) -> true
// find(7) -> false



class TwoSum{
    constructor(){
        this.nums = []
    }

    add(n){
        this.nums.push(n)
    }

    find(target){
        const results = {}
        for(let i=0; i<this.nums.length; i++ ){
            const remain = target - this.nums[i]
            if(results[this.nums[i]]) return true
            results[remain] = true
        } 
        return false
    }
}

twoSum = new TwoSum()
twoSum.add(1); 
twoSum.add(3); 
twoSum.add(5);
console.log(twoSum.find(4))
console.log(twoSum.find(7))