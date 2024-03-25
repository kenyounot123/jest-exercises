function reverseString(str) {
  const strArray = str.split("");
  const reversed = strArray.reverse();
  return reversed.join("");
}
export default reverseString;
