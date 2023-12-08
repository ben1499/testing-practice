import caeserCipher from "./caeserCipher"

test("Caeser Cipher", () => {
    expect(caeserCipher("julius caeser", 3)).toBe("mxolxv fdhvhu");
    expect(caeserCipher("julius caeser", 29)).toBe("mxolxv fdhvhu");
    expect(caeserCipher("Julius caeseR", 3)).toBe("Mxolxv fdhvhU");
    expect(caeserCipher("zhon", 1)).toBe("aipo");
    expect(caeserCipher("XYZa", 29)).toBe("ABCd");
})