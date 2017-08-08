var path = require("path");
var printMessage = require("print-message");
const exec = require("child_process").exec;
console.log("Running eslint test");
exec("node " + path.join("node_modules", ".bin", "eslint js"), (error, stdout, stderr) => {
	if (error || stdout) {
		printMessage(
			[
				"There are eslint errors in your project. Please run 'yarn run eslint [filename or dirname]' for more info.",
			],
			{
				color: "yellow",
			}
		);
		printMessage([error], {
			color: "red",
			border: false,
		});
		console.log("-----------------------------------------------");
		process.exit(1);
	}
	printMessage(["There are no eslint errors."], {
		color: "green",
		borderColor: "green",
	});
	console.log("-----------------------------------------------");
	process.exit(0);
});
