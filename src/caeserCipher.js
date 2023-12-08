function caeserCipher(string, key) {
  const stringArr = string.split("");
  const caseInfoArr = stringArr.map((item) => {
    return {
      char: item,
      isCapital: isUpperCase(item),
    };
  });

  const initCipherText = stringArr.map((char) => {
    const upperChar = char.toUpperCase();
    return incrementChar(upperChar, key);
  });

  const cipherTextArr = caseInfoArr.map((item, index) => {
    if (item.isCapital == false) return initCipherText[index].toLowerCase();
    else return initCipherText[index];
  });

  return cipherTextArr.join("");
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function incrementChar(char, key) {
  if (char == " ") return " ";
  const index = alphabet.indexOf(char);
  return alphabet[(index + key) % 26];
}

function isUpperCase(char) {
  if (char == " ") return null;
  return /^[A-Z]*$/.test(char);
}

export default caeserCipher;
