const fs = require("fs");

module.exports = {
  getProducts: (req, res) => {
    let products = fs.readFileSync("./data/products.json");
    res.status(200).send(JSON.parse(products));
  },
  postProducts: (req, res) => {
    let products = fs.readFileSync("./data/products.json");
    products = JSON.parse(products);
    products.push(req.body);
    fs.writeFileSync("./data/products.json", JSON.stringify(products));
    res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
  },
  putProducts: (req, res) => {
    let products = fs.readFileSync("./data/products.json");
    products = JSON.parse(products);
    let idx = products.findIndex((item) => item.id == req.query.id);
    products[idx] = req.body;
    fs.writeFileSync("./data/products.json", JSON.stringify(products));
    res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
  },
  patchProducts: (req, res) => {
    let products = fs.readFileSync("./data/products.json");
    products = JSON.parse(products);
    let idx = products.findIndex((item) => item.id == req.query.id);
    for (let prop in products[idx]) {
      for (let propBody in req.body)
        if (prop == propBody) {
          products[idx][prop] = req.body[propBody];
        }
    }
    fs.writeFileSync("./data/products.json", JSON.stringify(products));
    res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
  },
  deleteProducts: (req, res) => {
    let products = fs.readFileSync("./data/products.json");
    products = JSON.parse(products);
    let idx = products.findIndex((item) => item.id == req.query.id);
    products.splice(idx, 1);
    fs.writeFileSync("./data/products.json", JSON.stringify(products));
    res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
  },
};
