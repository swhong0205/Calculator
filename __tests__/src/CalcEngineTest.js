const calculator = require('CalcEngine');

test('사칙연산 한자리 : 한자리', () => {
  expect(calculator("9+3")).toBe(12);
  expect(calculator("9-3")).toBe(6);
  expect(calculator("9*3")).toBe(27);
  expect(calculator("9/3")).toBe(3);
});

test('사칙연산 두자리 : 두자리', () => {
  expect(calculator("90+30")).toBe(120);
  expect(calculator("90-30")).toBe(60);
  expect(calculator("90*30")).toBe(2700);
  expect(calculator("90/30")).toBe(3);
});

test('사칙연산 한자리 : 한자리 : 한자리', () => {
  expect(calculator("9+3+10")).toBe(22);
  expect(calculator("9-3+10")).toBe(16);
  expect(calculator("9*3+10")).toBe(37);
  expect(calculator("9/3+10")).toBe(13);
});

test('사칙연산 한자리 : 한자리 : 한자리 : 한자리', () => {
  expect(calculator("9+3+10+20")).toBe(42);
  expect(calculator("9-3+10+20")).toBe(36);
  expect(calculator("9*3+10+20")).toBe(57);
  expect(calculator("9/3+10+20")).toBe(33);
});
