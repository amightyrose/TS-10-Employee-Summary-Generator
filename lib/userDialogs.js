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

	console.log(colors.brightCyan(welcomeHeader));
	console.log(colors.brightCyan(welcomeMessage));

}


// Function to display a prompt asking if the user wants to continue.
function promptContinue() {

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
function showHTML(html) {

	console.log(colors.yellow("\n\n*** You are about to write the following to './output/team.html'\n\n"));
	console.log(colors.brightMagenta(`${html}\n\n`));

}


// Function to display file written message.
function showSuccessMsg() {

	console.log(colors.green("\n*** Employee summary was successfully generated.\n"));

}


// Function to prompt for employee details.
function promptEmployeeDetails(ids) {

	const arrQuestions = [
		{
		type: "list",
		name: "role",
		message: "Choose the employee's role:",
		choices: ["Manager", "Engineer", "Intern"]
		},
		{
		type: "input",
		name: "employeeId",
		message: "Enter the employee ID:",
		validate: function(value) {
			const pass = value.match(/^\d+$/i);
			if (pass) {
				if (!ids.includes(value)) return true;
				return "This employee ID is already in use. Please choose another."
			}
			return "Please enter a valid employee id (numeric characters only).";
			}
		},
		{
		type: "input",
		name: "name",
		message: "Enter the employee's name: ",
		validate: function(value) {
			const pass = value.match(/^[a-zA-Z\s]+$/i);
			if (pass) {
				return true;
			}
			return "Please enter a valid name (alphabetic characters and spaces only).";
			}
		},
		{
		type: "input",
		name: "email",
		message: "Enter the employee's email address:",
		validate: function(value) {
			const pass = value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i);
			if (pass) {
			  return true;
			}
			return "Please enter a valid email address.";
			}
		},
		{
		type: "input",
		name: "officeNumber",
		message: "Enter the employee's office phone number:",
		when: function(answers) {
			return answers.role === "Manager";
			},
		validate: function(value) {
			const pass = value.match(/^\d{3,}$/i);
			if (pass) {
				return true;
			}
			return "Please enter a valid office number (numeric characters only, minimum 3 digits).";
			}
		},
		{
		type: "input",
		name: "github",
		message: "Enter the employee's GitHub username:",
		when: function(answers) {
			return answers.role === "Engineer";
			},
		validate: function(value) {
			const pass = value.match(/^[a-z0-9]+$/i);
			if (pass) {
				return true;
			}
			return "Please enter a valid github username (alphanumeric characters only).";
			}
		},
		{
		type: "input",
		name: "school",
		message: "Enter the employee's school name:",
		when: function(answers) {
			return answers.role === "Intern";
		},
		validate: function(value) {
			const pass = value.match(/^[a-z0-9\s]+$/i);
			if (pass) {
				return true;
			}
			return "Please enter a valid school name (alphanumeric characters and spaces only).";
			}
		}
	]

	console.log("\n");

	return inquirer.prompt(arrQuestions);

}


// Function to display a prompt asking if the user wants to continue.
function promptAddEmployee() {

	console.log("\n");

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


// Function to show current operation in progress.
function showCurrentOpMsg(message) {

	console.log(colors.yellow(message));

}


// Exports
module.exports = {
	showWelcome,
	promptContinue,
	showHTML,
	showSuccessMsg,
	promptEmployeeDetails,
	promptAddEmployee,
	showCurrentOpMsg
}
