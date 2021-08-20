const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 2601;
const app = express();

app.use(cors());
app.use(bodyParser());

const { productsRouter } = require("./router");

app.use("/data", productsRouter);

app.listen(port, () => console.log("Server Running on port ", port));

// app.get("/", (req, res) => {
//   res.status(200).send(`<h1> Welcome to Express</h1>`);
// });

// app.get("/products", (req, res) => {
//   let products = fs.readFileSync("./data/products.json");
//   res.status(200).send(products);
// });

// app.post("/products", (req, res) => {
//   let products = fs.readFileSync("./data/products.json");
//   products = JSON.parse(products);
//   products.push(req.body);
//   fs.writeFileSync("./data/products.json", JSON.stringify(products));
//   res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
// });

// app.patch("/products", (req, res) => {
//   let products = fs.readFileSync("./data/products.json");
//   products = JSON.parse(products);
//   let idx = products.findIndex((item) => item.id == req.query.id);
//   for (let prop in products[idx]) {
//     for (let bodyProp in req.body) {
//       if (prop == bodyProp) {
//         products[idx][bodyProp] = req.body[bodyProp];
//       }
//     }
//   }
//   fs.writeFileSync("./data/products.json", JSON.stringify(products));
//   res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
// });

// app.put("/products", (req, res) => {
//   let products = fs.readFileSync("./data/products.json");
//   products = JSON.parse(products);
//   let idx = products.findIndex((item) => item.id == req.query.id);
//   products[idx] = req.body;
//   fs.writeFileSync("./data/products.json", JSON.stringify(products));
//   res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
// });

// app.delete("/products", (req, res) => {
//   let products = fs.readFileSync("./data/products.json");
//   products = JSON.parse(products);
//   let idx = products.findIndex((item) => item.id == req.query.id);
//   products.splice(idx, 1);
//   fs.writeFileSync("./data/products.json", JSON.stringify(products));
//   res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
// });
