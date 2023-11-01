// Import the npms we need

// inquirer for adding prompts to the user to gather needed information
const inquirer = require("inquirer");

// fs for creating files
const fs = require("fs");

// We will also need to use our created functions
const { Circle, Square, Triangle } = require(".lib/shapes");

// Prompts for User

function logoQuestions(){
    inquirer
    .prompt([
        // Text
        {
            type: "input",
            message: "What text do you want in your logo? (Enter up to three characters)",
            name: "text",
            validate: function(input) {
                if (input.length > 3) {
                    return "Please enter up to three characters only.";
                }
                return true;
            }
        },
        // Color of Text
        {
            type: "input",
            message: "What color would you like your text to be? (Enter color OR hexadecimal value)",
            name: "textColor",
        },
        // Shape
        {
            type: "list",
            message: "What shape would you like to use for your logo?",
            choices: ["Circle", "Square", "Triangle"],
            name: "shape",
        },
        // Shape Color
        {
            type: "input",
            message: "What color would you like your shape to be? (Enter color OR hexaddecimal value)",
        },
    ])
    .then ((data) =>{
       
    })
    .catch((error) => {
        console.log("Error:", error);
    })
}