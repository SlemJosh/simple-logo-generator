// inquirer for adding prompts to the user to gather needed information
// VERY IMPORTANT npm i inquirer@8.2.4 Needs to be this version or it doesn't initiate.
const inquirer = require('inquirer'); // Inquirer for command-line prompts
const fs = require('fs'); // File system module for file operations
const { Circle, Square, Triangle } = require("./lib/shapes"); // Importing shapes module
const allowedColors = [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
  "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue",
  "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
  "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
  "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick",
  "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow",
  "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon",
  "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon",
  "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
  "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
  "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
  "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod",
  "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
  "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
  "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue",
  "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];



// Function to prompt user for logo creation
function logoQuestions() {
  inquirer
    .prompt([

      // Text
      {
        type: "input",
        message: "What text do you want in your logo? (Enter up to three characters)",
        name: "text",
        // Need to validate if it has 3 or more characters.
        validate: function (input) {
          if (input.length > 3) {
            return "Please enter up to three characters only.";
          }
          return true;
        }
      },

      // Text Color
      {
        type: "input",
        message: "What color would you like your text to be? (Enter color OR hexadecimal value)",
        name: "textColor",
        // validation for color including the top 100 colors in word form
        validate: function (input) {
          const color = input.toLowerCase(); //Convert user input to lowercase
          const isValidHexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
          if (isValidHexColor || allowedColors.map(c => c.toLowerCase()).includes(color)) {
            return true; // Input is a valid color
          } else {
            return "Please enter a valid color (color name or hexadecimal value).";
          }
        }
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
        message: "What color would you like your shape to be? (Enter color OR hexadecimal value)",
        name: "shapeColor",
        // validation for color including the top 100 colors in word form
        validate: function (input) {
          const color = input.toLowerCase(); //Convert user input to lowercase
          const isValidHexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
          if (isValidHexColor || allowedColors.map(c => c.toLowerCase()).includes(color)) {
            return true; // Input is a valid color
          } else {
            return "Please enter a valid color (color name or hexadecimal value).";
          }
        }
      },
    ])
    .then((data) => {
      // Display user inputs.  Just so we can verify in the console.
      console.log("User Inputs:");
      console.log("Text:", data.text);
      console.log("Text Color:", data.textColor);
      console.log("Selected Shape:", data.shape);
      console.log("Shape Color:", data.shapeColor);

      // Generate SVG content based on user input
      const svgContent = generateSvg(data);

      writeToFile("logo.svg", svgContent); // Write the SVG content to a file named 'logo.svg'
    })
    .catch((error) => {
      console.log("Error:", error); // Log errors
    });
}


// Function to generate SVG content based on user input
function generateSvg(data) {
  let svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  // Define the SVG for the selected shape based on user input
  let shapeSVG = "";

  if (data.shape === "Circle") {
    shapeSVG = `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>`;
  } else if (data.shape === "Square") {
    shapeSVG = `<rect x="70" y="70" width="160" height="160" fill="${data.shapeColor}"/>`;
  } else if (data.shape === "Triangle") {
    shapeSVG = `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;
  }

  // Combine SVG elements: shape and text
  svgString += shapeSVG;
  svgString += `<text x="150" y="120" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
  svgString += "</svg>";

  return svgString; // Return the complete SVG content
}


// Function to write SVG content to a file
function writeToFile(fileName, svgContent) {
  // First we want to make sure that the data we got from the prompts gave us a valid string to work with
  const svgString = svgContent;

  // Custom folder name for created logo
  const folderName = 'createdlogo';

  // path for the file
  const filePath = `${folderName}/${fileName}`;

  // Write SVG content to the specified file
  fs.writeFile(filePath, svgString, (err) => {
    if (err) {
      console.error("Error writing file:", err); // Log any errors 
    } else {
      console.log(`Generated ${fileName} in the createdlogo folder. Enjoy!`); // Log successful file generation
    }
  });
}

logoQuestions(); // Start the questions.