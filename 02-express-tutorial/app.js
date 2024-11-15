console.log("Express Tutorial");
const express = require("express");
const app = express();

app.use(express.static("./public"));

app.use((req, res) => {
  res.status(400).send("404 - Page Not Found");
});

// app.get("/", (req, res) => {
//   app.res("WOW - you got Express JS");
// });
// app.get("test", (req, res) => {
//   app.res("THIS IS TEST PAGE");
// });

app.listen(3000, () => {
  console.log("App is listening port 3000...");
});
