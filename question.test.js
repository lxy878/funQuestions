const { expect } = require('@jest/globals')
const letterCombinations = require('./Letter_Combinations_of_a_Phone_Number')

test('testing letter combinations of a phone number ', ()=>{
    let result = letterCombinations("23")
    expect(result).toStrictEqual(['ad', 'bd', 'cd','ae', 'be', 'ce', 'af', 'bf', 'cf'])
    result = letterCombinations("")
    expect(result).toStrictEqual([])
    result = letterCombinations("2")
    expect(result).toStrictEqual([ 'a', 'b', 'c' ])
})