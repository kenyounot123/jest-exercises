import capitalize from "./capitalize";

test("capitalizes first letter of a string", () => {
  expect(capitalize("yurrr")).toBe("Yurrr");
});

test("does nothing if first letter is already capitalized", () => {
  expect(capitalize("HAHAHA")).toBe("HAHAHA");
});

test("throw error if user inputs something other than a string", () => {
  const numbers = [3123, 45325, 123, 123123];
  numbers.forEach((num) => {
    expect(() => capitalize(num)).toThrow("Please input a valid string!");
  });
});
