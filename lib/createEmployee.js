const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");

// Function to create a new object from classes.
function createEmployee(employee) {
	console.log("testing");
	console.log(employee);

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

module.exports = createEmployee;