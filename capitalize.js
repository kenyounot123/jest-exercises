function capitalize(str) {
  if (typeof str === "number") {
    throw new Error("Please input a valid string!");
  }
  const firstLetter = str[0].toUpperCase();
  const newStr = firstLetter + str.slice(1, str.length);
  return newStr;
}
export default capitalize;
