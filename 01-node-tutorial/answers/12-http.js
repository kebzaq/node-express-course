// HTTP

const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  } else if (req.url === "/about") {
    res.end("You are on About page!");
  } else {
    res.end(`<h1>Oops!</h1>
        <p>Sorry, we can't find page you a looking for</p>
        <a href='/'> go back home </a>
        `);
  }

  //   res.write("Welcome to our homepage!");
  //   res.end();
});

server.listen(3000),
  () => {
    console.log("Server is listening on port 3000...");
  };
