const { readFileSync, writeFileSync } = require("fs");

console.log("start...");
// create file
writeFileSync("./temporary/fileA.txt", `This is sync line 1\n`, {
  flag: "a",
});
// console.log(readFileSync("./temporary/fileA.txt", "utf8"));
writeFileSync("./temporary/fileA.txt", `This is sync line 2\n`, {
  flag: "a",
});
// console.log(readFileSync("./temporary/fileA.txt", "utf8"));
writeFileSync("./temporary/fileA.txt", `This is sync line 3\n`, {
  flag: "a",
});
console.log(readFileSync("./temporary/fileA.txt", "utf8"));

//read the file
console.log("end!");
