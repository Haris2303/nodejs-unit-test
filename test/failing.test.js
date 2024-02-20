import { sayHello } from "../src/sayHello";

test('sayHello success', () => {
    expect(sayHello("Otong")).toBe("Hello Otong")
});

test.failing('sayHello failed', () => {
    sayHello(null)
});