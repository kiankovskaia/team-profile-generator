// creates the html file/
const fs = require("fs");
const path = require("path");

const templates = path.resolve(__dirname, "../templates");
const render = function (employees) {
  const html = [];
  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  return renderMain(html.join(''))
};
const renderManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templates, "manager.html"),
    "utf-8"
  );
  template = replacePlaceholders(template, 'name', manager.getName())
  template = replacePlaceholders(template, 'role', manager.getRole())
  template = replacePlaceholders(template, 'email', manager.getEmail())
  template = replacePlaceholders(template, 'id', manager.getId())
  template = replacePlaceholders(template, 'officeNumber', manager.getOfficeNumber())
  return template
};
const renderManager = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templates, "intern.html"),
    "utf-8"
  );
  template = replacePlaceholders(template, 'name', intern.getName())
  template = replacePlaceholders(template, 'role', intern.getRole())
  template = replacePlaceholders(template, 'email', intern.getEmail())
  template = replacePlaceholders(template, 'id', intern.getId())
  template = replacePlaceholders(template, 'school', intern.getSchool())
  return template
};
// const renderManager = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templates, "engineer.html"),
    "utf-8"
  );
  template = replacePlaceholders(template, 'name', engineer.getName())
  template = replacePlaceholders(template, 'role', engineer.getRole())
  template = replacePlaceholders(template, 'email', engineer.getEmail())
  template = replacePlaceholders(template, 'id', engineer.getId())
  template = replacePlaceholders(template, 'officeNumber', engineer.getOfficeNumber())
  return template
};
const renderMain = (html)=> {
const template = fs.readFileSync(
    path.resolve(templates,'main.html'),'utf-8'
)    
return replacePlaceholders(template,'team', html)
}
const replacePlaceholders = (template, placeholder, value) => {
    const pattern = RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };
  module.exports = render;