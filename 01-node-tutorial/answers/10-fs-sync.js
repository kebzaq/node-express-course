const { readFileSync, writeFileSync } = require("fs");

// create file
writeFileSync("./temporary/fileA.txt", `This is sample test LINE 1`, {
  flag: "a",
});

//read the file
console.log(readFileSync("./temporary/fileA.txt", "utf8"));
