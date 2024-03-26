function caesarCipher(str, shift) {
  const codes = convertToUnicode(str);
  const newStr = convertToString(codes, shift);
  return newStr;
}

function convertToUnicode(string) {
  let codeArray = [];
  for (let i in string) {
    const code = string.charCodeAt(i);
    codeArray.push(code);
  }
  return codeArray;
}
function convertToString(array, shift) {
  let newStr = "";
  array.forEach((num) => {
    if (num >= 97 && num <= 122) {
      newStr += String.fromCharCode(((num + shift - 97) % 26) + 97);
    } else if (num >= 65 && num <= 90) {
      newStr += String.fromCharCode(((num + shift - 65) % 26) + 65);
    } else {
      newStr += String.fromCharCode(num);
    }
  });
  return newStr;
}
export default caesarCipher;
