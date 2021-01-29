const Manager = require("../lib/Manager");
test("Can set office number using constructor argument", () => {
  const testValue = 100;
  const e = new Manager("officeNumber", 1, "test@test.com", testValue);
});
test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Alice Smith", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});
