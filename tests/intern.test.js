const Intern = require("../lib/Intern");
test("Can set school's name using constructor", () => {
  const testValue = "Brooklyn College";
  const e = new Intern("Brooklyn College", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Alice Smith", 1, "test@test.com", "Brooklyn College");
  expect(e.getRole()).toBe(testValue);
});
test("Can get school name using the getSchool() method", () => {
  const testValue = "Princeton";
  const e = new Intern("Alice Smith", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});