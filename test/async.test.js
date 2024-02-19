import { sayHelloAsync } from "../src/async";

test('test async function', async () => {
    const result = await sayHelloAsync("Otong")
    expect(result).toBe('Hello Otong')
})

test('test async matchers', async () => {
    await expect(sayHelloAsync('Otong')).resolves.toBe('Hello Otong')
    await expect(sayHelloAsync()).rejects.toBe('Name is empty')
});