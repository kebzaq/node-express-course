// Path module

const path = require("path");
console.log(path.sep); // platform specific separator

// filepath join
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// base
console.log(path.basename(filePath));

// absolute path
console.log(path.resolve(__dirname, "content", "subfolder", "test.txt"));
// console.log(absolute);
