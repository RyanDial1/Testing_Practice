import capital from "./capital";

test('string should be String', () =>{
    expect(capital("string")).toBe("String");
});

test('String should be String', () =>{
    expect(capital('String')).toBe('String');
});