const {returnTwo, greeting, add, divide, multiply, subtract} = require('./functions')

test('Should return the number 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('Should return "Hello, {name}."', () => {
    expect(greeting("Jill")).toEqual(`Hello, Jill.`)
})


describe('Math functions', () => {
    test('Should return the sum of two numbers', () => {
        expect(add(1, 2)).toEqual(3)
    
        expect(add(5, 9)).toEqual(14)
    })

    test('Should return the difference of two numbers', () => {
        expect(subtract(6, 2)).toEqual(4)
    
        expect(subtract(5, 9)).toEqual(-4)
    })

    test('Should return the product of two numbers', () => {
        expect(multiply(1, 2)).toEqual(2)
    
        expect(multiply(5, 8)).toEqual(40)
    })

    test('Should return the quotient of two numbers', () => {
        expect(divide(4, 2)).toEqual(2)
    
        expect(divide(12, 4)).toEqual(3)
    })
})


