import { sum } from "../src/sum";

beforeAll(() => {
    console.info('Before All')
})

afterAll(() => {
    console.info('After All')
})

beforeEach(() => {
    console.info('Before Each')
})

afterEach(() => {
    console.info('After Each')
})

test('first test', () => {
    expect(sum(5, 5)).toBe(10)
    console.info('First test')
});

test('second test', () => {
    expect(sum(10, 10)).toBe(20)
    console.info('Second test')
});