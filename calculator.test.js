import calculator from "./calculator";

test("add should add two numbers", () => {
  expect(calculator.add(3, 5)).toBe(8);
});
test("multiply should multiply two numbers", () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test("divide should divide two numbers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
test("divide should not be able to divide by zero", () => {
  expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
});

test("subtract should subtract two numbers", () => {
  expect(calculator.subtract(3, 5)).toBe(-2);
});
