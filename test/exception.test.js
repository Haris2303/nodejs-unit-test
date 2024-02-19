import { MyException, callMe } from "../src/exception";

test('exception', () => {
    expect(() => callMe('Otong')).toThrow()
    expect(() => callMe('Otong')).toThrow(MyException)
    expect(() => callMe('Otong')).toThrow("Ups my exceptions happens")
});