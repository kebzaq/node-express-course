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
console.log(readFileSync("./temporary/fileA.txt", "utf8")); // without UTF8 code it will return Buffer numbers

//read the file
console.log("end!");
