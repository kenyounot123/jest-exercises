import reverseString from "./reverse";

test("reverses a string", () => {
  expect(reverseString("youre so dumb")).toBe("bmud os eruoy");
});
test("reverses a a one word string", () => {
  expect(reverseString("stupid")).toBe("diputs");
});
