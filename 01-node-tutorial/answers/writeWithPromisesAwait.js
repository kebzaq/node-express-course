const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("./temporary/temp.txt", `This is line 1\n`);
    await writeFile("./temporary/temp.txt", `This is line 2\n`, { flag: "a" });
    await writeFile("./temporary/temp.txt", `This is line 3\n`, { flag: "a" });
    console.log("temp.txt file written successfully");
  } catch (err) {
    console.log("Error writing temporary file:", err);
  }
}

async function reader() {
  try {
    const result = await readFile("./temporary/temp.txt", "utf8");

    console.log(result);
  } catch (err) {
    console.log("Error reading temporary file:", err);
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite();
