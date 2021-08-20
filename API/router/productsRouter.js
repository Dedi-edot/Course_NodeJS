const express = require("express");
const router = express.Router();
const { productsController } = require("../controller");

router.get("/products", productsController.getProducts);
router.post("/products", productsController.postProducts);
router.put("/products", productsController.putProducts);
router.patch("/products", productsController.patchProducts);
router.delete("/products", productsController.deleteProducts);

module.exports = router;
