import calculator from "./calculator";

test("Calculator", () => {
    expect(calculator().add(2, 2)).toBe(4);
    expect(calculator().subtract(5, 2)).toBe(3);
    expect(calculator().divide(10, 2)).toBe(5);
    expect(calculator().multiply(10, 5)).toBe(50);
})