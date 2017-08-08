var path = require("path");
var printMessage = require("print-message");
const exec = require("child_process").exec;
console.log("Running jest test cases");
exec("node " + path.join("node_modules", ".bin", "jest -i"), (error, stdout, stderr) => {
	if (error || stdout) {
		printMessage(["There are jest errors in your project. Please run 'yarn jest' for more info."], {
			color: "yellow",
		});
		printMessage([error], {
			color: "red",
			border: false,
		});
		process.exit(1);
	}
	printMessage(["There are no jest errors."], {
		color: "green",
		borderColor: "green",
	});
	process.exit(0);
});
