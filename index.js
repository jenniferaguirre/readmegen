var inquirer=require("inquirer");
var fs =require ("fs")


var questions=[
  {
type: "input",
name:"github",
message: " What is your Github username ? "
  },

{type: "input",
name:"projectName",
message: " What is your Project Name ? "
},



{
  type: "input",
  name:"description",
  message: " What is the Project about ? "
  

},

{
  type: "input",
  name: "license",
  message: "What licenses are used in this project?"
},
{
  type: "input",
  name: "contributors",
  message: "If any contributors, please write them down."
},
{
  type: "input",
  name: "test",
  message: "What command should be run to run tests?",
  
},
{
  type: "input",
  name: "usage",
  message: "What does the user need to know about using the repo?",
},
{
  type: "input",
  name: "profile",
  message: "Please link your GitHub profile."
}
];

function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
inquirer.prompt(questions)
.then((inquirerResponses) => {
  console.log("Generating README...");
  writeToFile("README.md", generateMarkdown({...inquirerResponses}));
})
}

init();
















]

console.log(questions)

  




   
    



