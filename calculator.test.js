import calculator from './calculator';

test('add (1+2) is 3', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('subtract (10-5) is 5', () => {
    expect(calculator.subtract(10,5)).toBe(5);
});

test('multiply (2*3) is 6', () => {
    expect(calculator.multiply(2,3)).toBe(6);
});

test('divide (8*2) is 4', () => {
    expect(calculator.divide(8,2)).toBe(4);
});

