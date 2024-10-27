// Async

const { readFile, writeFile } = require("fs");

console.log("at start...");
writeFile("./temporary/fileB.txt", `This is Async line 1\n`, (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened", err);
    return;
  } else {
    console.log(result);
    writeFile(
      "./temporary/fileB.txt",
      `This is Async line 2\n`,
      (err, result) => {
        console.log("at point 2");
        if (err) {
          console.log("This error happened", err);
          return;
        } else {
          writeFile(
            "./temporary/fileB.txt",
            `This is Async line 3\n`,
            (err, result) => {
              console.log("at point 3");
              if (err) {
                console.log("This error happened", err);
                return;
              } else {
                console.log(result);
              }
            }
          );
        }
      }
    );
  }
});
console.log("at end!");
