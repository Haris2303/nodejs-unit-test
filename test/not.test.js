test('stirng.not', () => {
    const name = 'Otong Surotong'

    expect(name).not.toBe('Udin')
    expect(name).not.toEqual('Udin')
    expect(name).not.toMatch(/Udin/)
});

test('number.not', () => {
    const value = 2 + 2

    expect(value).not.toBeGreaterThan(6)
    expect(value).not.toBeLessThan(3)
    expect(value).not.toBe(10)
});