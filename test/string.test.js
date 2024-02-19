test('string', () => {
    const name = "Otong Surotong"

    expect(name).toBe("Otong Surotong")
    expect(name).toMatch(/urot/)
});