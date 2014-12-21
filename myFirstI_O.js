var fs = require("fs"); // makes file system module available under fs
var path = process.argv[2];
var lines = fs.readFileSync(path).toString().split("\n");
var count = 0;
for (var i in lines) {
	if (lines[i] !== "") { // look for non-empty lines
		count += 1;
	}
}
console.log(count - 1);





