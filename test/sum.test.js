import { sum, sumAll } from "../src/sum"

test("test sum function", () => {
    const result = sum(5, 10)

    expect(result).toBe(15)
})

test("test sum function 2", () => {
    const result = sum(5, 10)

    expect(result).toBe(15)
})

test('test sum all', () => {
    const numbers = [5,5,5,5,5]
    expect(sumAll(numbers)).toBe(25)
});