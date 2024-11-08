const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Enter something below...";
let backgroundColor = "white";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color: ${backgroundColor};">
  <p>${item}</p>
  <form method="POST">
  <input name="item"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["item"]) {
        item = body["item"];
        if (item === "pink") {
          backgroundColor = "pink";
        } else if (item === "blue") {
          backgroundColor = "blue";
        } else {
          backgroundColor = "green";
        }
      } else {
        item = "Nothing was entered.";
        backgroundColor = "yellow";
      }
      // if (item >= 2013) {
      //   console.log(`You age range is: Generation Alpha`);
      // } else if ((item >= 1997) & (item <= 2012)) {
      //   console.log(`You age range is: Generation Z`);
      // } else if ((item >= 1981) & (item <= 1996)) {
      //   console.log(`You age range is: Millenials`);
      // } else if ((item >= 1965) & (item <= 1980)) {
      //   console.log(`You age range is: Generation X`);
      // } else if ((item >= 1946) & (item <= 1964)) {
      //   console.log(`You age range is: Baby Boomers`);
      // } else if ((item >= 1928) & (item <= 1945)) {
      //   console.log(`You age range is: Silent Generation`);
      // } else {
      //   console.log(`You age range is: Unknown`);
      // document.body.innerHTML += "You age range is: Unknown";
      // }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});

server.listen(3000);
console.log("The server is listening on port 3000.");
