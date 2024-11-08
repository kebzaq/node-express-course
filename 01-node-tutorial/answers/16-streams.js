// read stream for big file
const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 5000,
});
let counter = 0;
stream.on("data", (result) => {
  console.log(result);
  counter++;
});
stream.on("end", () => {
  console.log("Total number of chunks", counter);
});

stream.on("error", (err) => {
  console.log("'This Error happened:", err);
});
