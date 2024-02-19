test('test toBe', () => {
    const name = "Otong"
    const hello = `Hello ${name}`

    expect(hello).toBe("Hello Otong")
});

test('test toEquals', () => {
    const person = {id: "otong"}
    Object.assign(person, {name: "Otong"})

    expect(person).toEqual({id: "otong", name: "Otong"})
});