// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const answer = [];
	if (line > 0) {
		for (let i = 1; i < line+1; i++) {
			if (Number.isInteger(line / i)) {
				answer.push(i);
			}
		}
	} else {
		return;
	}
	
	const ans = answer.join(" ")
	console.log(ans+' ');
	rl.close();
}).on("close", function() {
	process.exit();
});
