const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const { promptEmployeeDetails, promptAddEmployee } = require('../lib/userDialogs');


// Function to instantiate a new object from a class.
function createEmployee(employee) {


	// Grab some initial variables from the object that was passed.
	const { name, employeeId, email } = employee;


	// Declare the newEmployee variable.
	let newEmployee;


	// Instantiate a new object from a class depending on the employee's role.
	switch (employee.role) {

		case "Manager":
			const { officeNumber } = employee;
			newEmployee = new Manager(name, employeeId, email, officeNumber);
			break;

		case "Engineer":
			const { github } = employee;
			newEmployee = new Engineer(name, employeeId, email, github);
			break;

		case "Intern":
			const { school } = employee;
			newEmployee = new Intern(name, employeeId, email, school);
			break;

	}


	// Return the new employee object.
	return newEmployee;


}


// Function to create an array of employee objects.
async function getEmployees() {


	// Initialise the array.
	let arrEmployees = [];


	// Run a while loop to keep getting employee details until the user answers no.
	boolContinue = true;

	while (boolContinue) {

		// Call createEmployee which will use promptEmployeeDetails to create an employee object.
		const objEmployee = createEmployee(await promptEmployeeDetails());

		// Add it to the array
		arrEmployees.push(objEmployee);

		// Ask the user if they want to create another employee. If yes, back to the start of the loop.
		boolContinue = await promptAddEmployee();

	}


	// Return the employees array.
	return arrEmployees;


}


module.exports = getEmployees;
