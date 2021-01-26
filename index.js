const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const engineerQuestions = []

inquirer
  .prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Enter Role',
      choices: ['Engineer', 'Manager', 'Intern'],
    }

  ])
  .then(role => {
  switch (role.role) {
    case "Engineer" :
      inquirer
      .prompt([
        {
          name: 'name',
          message: 'Enter Name',
        },
        {
          name: 'id',
          message: 'Enter Id'
        },
        {
          name: 'email',
          message: "Enter Email"
        },
        {
          name: 'github',
          message: 'Enter GitHub url'
        }
    
      ]).then(engineer =>{
       const eng = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
       console.log("engineer: " + JSON.stringify(eng)) 
       console.info('Name: ' + engineer.name, ' Id: ' + engineer.id, ' Email: ' + engineer.email, ' Github: ' + engineer.github, );
      })
      break;
      case "Manager": 
      inquirer
      .prompt([
        {
          name: 'name',
          message: 'Enter Name',
        },
        {
          name: 'id',
          message: 'Enter Id'
        },
        {
          name: 'email',
          message: "Enter Email"
        }
    
      ]).then(manager =>{
        const man = new Manager(manager.name, manager.id, manager.email);
       console.log("manager: " + JSON.stringify(man)) 
        console.info('Name: ' + manager.name, ' Id: ' + manager.id, ' Email: ' + manager.email);
      })
      break;
      case "Intern": 
      inquirer
      .prompt([
        {
          name: 'name',
          message: 'Enter Name',
        },
        {
          name: 'id',
          message: 'Enter Id'
        },
        {
          name: 'email',
          message: "Enter Email"
        },
        {
          name: 'school',
          message: 'Enter School'
        } 

    
      ]).then(intern =>{
        const int = new Intern(intern.name, intern.id, intern.email, intern.school);
       console.log("intern: " + JSON.stringify(int))
        console.info('Name: ' + intern.name, ' Id: ' + intern.id, ' Email: ' + intern.email, ' School: ' + intern.school);
      })
  }

    
  });
