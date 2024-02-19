test('array simple', () => {
    const names = ['Ucup', 'Otong', 'Udin']
    expect(names).toEqual(['Ucup', 'Otong', 'Udin'])
    expect(names).toContain('Otong')
});

test('array object', () => {
    const persons = [
        {
            name: 'Ucup'
        },
        {
            name: 'Otong'
        }
    ]
    expect(persons).toContainEqual({name: 'Otong'})
});