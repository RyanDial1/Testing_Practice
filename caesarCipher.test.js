import caesarCipher from './caesarCipher';


test("aabbcc becomes bbccdd", () => {
    expect(caesarCipher('aabbcc')).toBe('bbccdd');
});

test("aAabBbzZz becomes bBbcCcaAa", () => {
    expect(caesarCipher('aAabBbzZz')).toBe('bBbcCcaAa');
}); 