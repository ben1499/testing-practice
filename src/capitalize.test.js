import capitalize from "./capitalize"

test("Capitalize word", () => {
    expect(capitalize("babel")).toBe("Babel");
})