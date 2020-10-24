const userDialogs = require('../lib/userDialogs');
const createEmployee = require('./createEmployee');

async function getEmployees() {

	let arrEmployees = [];

	// Run a while loop to keep getting employee details until the user answers no.
	boolContinue = true;

	while (boolContinue) {

		// Call createEmployee which will use promptEmployeeDetails to create an employee object.
		const objEmployee = createEmployee(await userDialogs.promptEmployeeDetails());
		console.log(objEmployee);

		// Add it to the array
		arrEmployees.push(objEmployee);

		// Ask the user if they want to create another employee. If yes, back to the start of the loop.
		boolContinue = await userDialogs.promptAddEmployee();

	}

	console.log(`returning:`);
	console.log(arrEmployees);
	return arrEmployees;

}

module.exports = getEmployees;



