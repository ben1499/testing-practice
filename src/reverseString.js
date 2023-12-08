function reverseString(string) {
    const arr = string.split("");
    arr.reverse();
    return arr.join("");
}

export default reverseString;