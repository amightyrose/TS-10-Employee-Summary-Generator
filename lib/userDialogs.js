const colors = require('colors');
const inquirer = require('inquirer');


// Function to show the welcome header and message.
function showWelcome() {

	const welcomeHeader = `

=================================================================
||                                                             ||
|                 Employee Summary Generator                    |
||                                                             ||
=================================================================

`

	const welcomeMessage = `

Welcome to the Employee Summary Generator!
This application will generate a roster of employee details based on information you provide.

`

	console.clear();

	console.log(colors.green(welcomeHeader));
	console.log(colors.yellow(welcomeMessage));

}


// Function to display a prompt asking if the user wants to continue.
function continuePrompt() {

	return inquirer.prompt([
		{
			type: "confirm",
			name: "continue",
			message: "Would you like to continue?",
			default: true
		}
	]);

}


// Function to preview the generated output in the console before writing to file.
function previewHTML(md) {

	console.log(colors.yellow("\n\n*** You are about to write the following to './output/team.html\n"));
	console.log(colors.green(`${html}\n\n`));

}


// Function to display file written message.
function showSuccessMsg() {

	console.log(colors.yellow("\n\n*** Employee summary was successfully generated.\n"));

}


// Exports
module.exports = {
	showWelcome: showWelcome,
	continuePrompt: continuePrompt,
	previewHTML: previewHTML,
	showSuccessMsg: showSuccessMsg
}
