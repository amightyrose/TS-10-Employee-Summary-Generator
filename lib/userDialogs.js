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
	]).then(function (answers) {
		return answers.continue;
	});

}


// Function to preview the generated output in the console before writing to file.
function previewHTML(html) {

	console.log(colors.yellow("\n\n*** You are about to write the following to './output/team.html\n"));
	console.log(colors.green(`${html}\n\n`));

}


// Function to display file written message.
function showSuccessMsg() {

	console.log(colors.yellow("\n\n*** Employee summary was successfully generated.\n"));

}


// Function to prompt for employee details.
function getEmployeeDetails() {

		const arrQuestions = [
		{
		type: "list",
		name: "role",
		message: "Choose the employee's role:",
		choices: ["Manager", "Engineer", "Intern"]
		},
		// {
		// type: "number",
		// name: "employeeId",
		// message: "Enter the employee ID:"
		// },
		// {
		// type: "input",
		// name: "name",
		// message: "Enter the employee's name: "
		// },
		// {
		// type: "input",
		// name: "email",
		// message: "Enter the employee's email address:"
		// },
		// {
		// type: "number",
		// name: "officeNumber",
		// message: "Enter the employee's office phone number:",
		// when: function(answers) {
		// 	return answers.role === "Manager";
		// 	}
		// },
		// {
		// type: "input",
		// name: "github",
		// message: "Enter the employee's GitHub username:",
		// when: function(answers) {
		// 	return answers.role === "Engineer";
		// 	}
		// },
		// {
		// type: "input",
		// name: "school",
		// message: "Enter the employee's school name:",
		// when: function(answers) {
		// 	return answers.role === "Intern";
		// 	}
		// }
	]

	return inquirer.prompt(arrQuestions);

}

// Function to display a prompt asking if the user wants to continue.
function addEmployee() {

	return inquirer.prompt([
		{
			type: "confirm",
			name: "add",
			message: "Would you like to add another employee?",
			default: true
		}
	]).then(function (answers) {
		return answers.add
	});

}



// Exports
module.exports = {
	showWelcome: showWelcome,
	continuePrompt: continuePrompt,
	previewHTML: previewHTML,
	showSuccessMsg: showSuccessMsg,
	getEmployeeDetails,
	addEmployee
}
