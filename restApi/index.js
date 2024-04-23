const express = require("express");
const router = express.Router();

const routerHome = require("./home/index");
const routerProduct = require("./product/index");

router.use(routerHome);
router.use("/api/product", routerProduct);

module.exports = router;