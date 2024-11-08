const { readFile, writeFile } = require("fs").promises;

// write file with then to make it async
console.log("starting then");
writeFile("./temporary/temp.txt", `This is THEN line 1\n`)
  .then(() => {
    console.log("2nd line then");
    return writeFile("./temporary/temp.txt", `This is THEN line 2\n`, {
      flag: "a",
    });
  })
  .then(() => {
    console.log("3rd line then");
    return writeFile("./temporary/temp.txt", `This is THEN line 3\n`, {
      flag: "a",
    });
  })
  // added read file here with then()
  .then(() => {
    readFile("./temporary/temp.txt", `utf8`).then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log("temp.txt file written successfully");
  });
