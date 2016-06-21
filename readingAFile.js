var fs = require('fs');

var buffer = fs.readFileSync('nodePractice/a-file.txt');
console.log('Buffer: ', buffer);

var stringContents = buffer.toString();
console.log("String Contents: ", stringContents);
