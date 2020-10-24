const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const { promptEmployeeDetails, promptAddEmployee } = require('../lib/userDialogs');


// Function to instantiate a new object from a class.
function createEmployee(employee) {

	const { name, employeeId, email } = employee;

	let newEmployee;

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

	return newEmployee;

}


// Function to create an array of employee objects.
async function getEmployees() {

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

	return arrEmployees;

}


module.exports = getEmployees;
