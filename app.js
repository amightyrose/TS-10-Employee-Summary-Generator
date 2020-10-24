// Declare some variables.
const path = require("path");
const fs = require("fs");
const util = require("util");
const { showWelcome, promptContinue, showHTML, showSuccessMsg, showCurrentOpMsg } = require("./lib/userDialogs")
const getEmployees = require('./lib/getEmployees')
const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


async function init() {

	try {


		// Display the welcome header and message.
		showWelcome();


		// Ask the user if they want to continue. If not, exit.
		if (!(await promptContinue())) {return};


		// Call getEmployees to create the employees array.
		const arrEmployees = await getEmployees();


		// Call render with the employee array to render the html. Preview the html in the console.
		const html = render(arrEmployees);
		showHTML(html);


		// Ask the user again if they want to continue.
		if (!(await promptContinue())) {return};


		// Check if the output directory exists and create it if necessary.
		showCurrentOpMsg("\nChecking output directory...");

		if (!fs.existsSync(outputPath)) {

			showCurrentOpMsg("\nCreating output directory...");
			fs.mkdirSync(OUTPUT_DIR);

		}


		// Write the output file.
		showCurrentOpMsg("\nWriting output file...");
		await writeFileAsync(outputPath, html);


		// Display the "file written" message.
		showSuccessMsg();


	}
	catch(err) {

		console.log(`The following error was encountered: ${err}`);

	}

}


init();
