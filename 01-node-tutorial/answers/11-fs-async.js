// Async

const { writeFile } = require("fs");

// write
console.log("at start...");
writeFile(
  "./temporary/fileB.txt",
  `This is Async line 1\n`,
  { flag: "a" },
  (err, result) => {
    console.log("at point 1");
    if (err) {
      console.log("This error happened", err);
      return;
    } else {
      writeFile(
        "./temporary/fileB.txt",
        `This is Async line 2\n`,
        { flag: "a" },
        (err, result) => {
          console.log("at point 2");
          if (err) {
            console.log("This error happened", err);
            return;
          } else {
            writeFile(
              "./temporary/fileB.txt",
              `This is Async line 3\n`,
              { flag: "a" },
              (err, result) => {
                console.log("at point 3");
                if (err) {
                  console.log("This error happened", err);
                  return;
                }
              }
            );
          }
        }
      );
    }
  }
);
console.log("at end!");
