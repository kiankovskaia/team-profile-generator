const Employee = require("../lib/Employee");

test("can create new employee object", function () {
  const testEmployee = new Employee();
  expect(typeof testEmployee).toBe("object");
});
