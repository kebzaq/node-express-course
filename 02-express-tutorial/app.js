console.log("Express Tutorial");
const express = require("express");
const { products } = require("./data");
const app = express();

const logger = (req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
};
// logger();
// Task 4 - load static assets from public folder
app.use(express.static("./public"));

// Task 7.0 - return json file to test
app.get("/api/v1/test", logger, (req, res) => {
  return res.json({ message: "It worked!" });
  // return;
  console.log("TEST after");
});

// Task 7.1 - returns all products from data.js
app.get("/api/v1/products", (req, res) => res.json(products));

// Task 7.1.1 - returns requested single product by ID
app.get("/api/v1/products/:productID", (req, res) => {
  // Task 7.1.1 - returns productID === 7 json message
  if (req.params.productID === "7") {
    res.json(req.params);
    // res.json({ productId: 7 });
    return;
  }
  // Task 7.1.2 - returns single product by ID
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  // Task 7.1.2:1 - returns 404 if product not found
  if (!product) {
    res
      .status(200)
      .json({ message: `That product (${idToFind}) was not found.` });
    return;
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
