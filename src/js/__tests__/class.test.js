import Validator from "../class";

test('test class true', () => {
    const exampleFirst = "sasha";
    const result = true;
    expect(() => Validator.validateUsername(exampleFirst)).toBe(result);
  });

test('test class true', () => {
    const exampleSecond = "sasha9";
    const result = false;
    expect(() => Validator.validateUsername(exampleSecond)).toBe(result);
  });