var path = require("path");
const exec = require("child_process").exec;
exec("node " + path.join("node_modules", ".bin", "eslint js/setup.js"), (error, stdout, stderr) => {
	if (error) {
		console.error(
			"There are eslint errors in your project. Please run 'yarn run eslint [filename or dirname]' for more info."
		);
		process.exit(1);
	}
	console.log(stdout, "Some");
	console.log("There are no errors.");
	process.exit(0);
});
