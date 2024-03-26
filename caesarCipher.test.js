import caesarCipher from "./caesarCipher";

test("encrypts lower case strings correctly", () => {
  expect(caesarCipher("dooblx", 2)).toBe("fqqdnz");
});

test("encrypts lower case strings correctly when wrapping", () => {
  expect(caesarCipher("dooblz", 2)).toBe("fqqdnb");
});
test("encrypts upper case strings correctly", () => {
  expect(caesarCipher("DOOBLX", 2)).toBe("FQQDNZ");
});

test("encrypts upper case strings correctly when wrapping", () => {
  expect(caesarCipher("DOOBLZ", 2)).toBe("FQQDNB");
});
test("encrypts strings correctly when there is punctuation", () => {
  expect(caesarCipher("DOOBLZ!!", 2)).toBe("FQQDNB!!");
});
