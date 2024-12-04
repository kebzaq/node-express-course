console.log("Express Tutorial");
const express = require("express");
const { products, people } = require("./data");
const peopleRouter = require("./routes/people");
const cookieParser = require("cookie-parser");
const app = express();

// create middleware function logger
const logger = (req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  console.log(new Date());
  next();
};

// app.use(logger);
// Task 4 - load static assets from public folder
// app.use(express.static("./public"));
app.use(express.static("./methods-public"));

// to parse request body
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// app.get("/api", logger, (req, res) => {});

// Task 7.0 - return json file to test
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

// // create API's for people
app.use("/api/v1/people", peopleRouter);
// app.get("/api/v1/people", (req, res) => {
//   console.log("People api");
//   res.json(people);
// });

// app.post("/api/v1/people", (req, res) => {
//   if (!req.body.name) {
//     res.status(400).json({ success: false, message: "Please provide a name" });
//     return;
//   }
//   people.push({ id: people.length + 1, name: req.body.name });
//   return res.status(201).json({ success: true, name: req.body.name });
// });
// Task 7.1 - returns all products from data.js
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

// Task 7.1.1 - returns requested single product by ID
app.get("/api/v1/products/:productID", (req, res) => {
  // Task 7.1.1 - returns productID === 7 json message
  if (req.params.productID === "7") {
    res.json(req.params);
    return;
    // res.json({ productId: 7 });
  }
  // Task 7.1.2 - returns single product by ID
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  // Task 7.1.2:1 - returns 404 if product not found
  if (!product) {
    res
      .status(404)
      .json({ message: `That product (${idToFind}) was not found.` });
  }
  // returns single product if found
  res.json(product);
});

// Task 7.1.2:2 - returns query string parameter results
app.get("/api/v1/query", (req, res) => {
  const { search, limit, price } = req.query;
  let queriedProducts = [...products];
  if (search) {
    queriedProducts = queriedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  // Task 7.1.2:3 - additional logic with price
  if (price) {
    queriedProducts = queriedProducts.filter((p) => {
      return p.price < price;
    });
  }
  if (limit) {
    queriedProducts = queriedProducts.slice(0, Number(limit));
  }
  if (!queriedProducts.length) {
    return res.json({ message: "No product found matching your query." });
  }

  return res.json(queriedProducts);
});

// Task 6: 404 - page not found with all() method
app.all("*", (req, res) => {
  // res.writeHead(400, { "Content-Type": "application/json" });
  // res.status(400).send({ message: "404 - Page Not Found" });
  res.status(400).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("App is listening port 3000...");
});
