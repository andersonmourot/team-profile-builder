const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const path = require("path");
const templates = require("./src/templates");
const DIST = path.resolve(__dirname, "dist");
const PATH = path.join(DIST, "team.html");

const team = [];

function main() {
  createManager().then((answers) => {
    const { managerName, managerID, managerEmail, managerOfficeNumber } =
      answers;
    const manager = new Manager(
      managerName,
      managerID,
      managerEmail,
      managerOfficeNumber
    );
    team.push(manager);
    createTeam();
  });
}

function createManager() {
  console.log("Let's start building your team");
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?",
    },
  ]);
}

function createEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "engineerID",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's github?",
    },
  ]);
}

function createIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "internID",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
    },
  ]);
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberChoice",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I've finished my team."],
      },
    ])
    .then((answer) => {
      switch (answer.teamMemberChoice) {
        case "Engineer":
          createEngineer().then((answers) => {
            const { engineerName, engineerID, engineerEmail, github } = answers;
            const engineer = new Engineer(
              engineerName,
              engineerID,
              engineerEmail,
              github
            );
            team.push(engineer);
            createTeam();
          });
          break;
        case "Intern":
          createIntern().then((answers) => {
            const { internName, internID, internEmail, school } = answers;
            const intern = new Intern(
              internName,
              internID,
              internEmail,
              school
            );
            team.push(intern);
            createTeam();
          });
          break;
        default:
          buildTeam();
      }
    });
}

function createHTML(teamArr) {
  let htmlMain = ``;

  teamArr.forEach((teamMember) => {
    if (teamMember.getRole() === "Manager") {
      htmlMain = htmlMain + templates.managerTemplate(teamMember);
    }
    if (teamMember.getRole() === "Engineer") {
      htmlMain = htmlMain + templates.engineerTemplate(teamMember);
    }
    if (teamMember.getRole() === "Intern") {
      htmlMain = htmlMain + templates.internTemplate(teamMember);
    }
  });
  return htmlMain;
}

function buildTeam() {
  fs.writeFileSync(PATH, createHTML(team), "utf-8");
}

main();
