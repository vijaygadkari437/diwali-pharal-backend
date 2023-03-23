const express = require("express");
const router = express.Router();

const appRoutes = require("./app");
const authenticateUser = require("./authentication");
const userRoutes = require("./user");
// const productRoutes = require("./product");
// const cartRoutes = require("./cart");
// const orderRoutes = require("./order");

router.use("/app", appRoutes);

router.use(authenticateUser);

router.use("/user", userRoutes);

// router.use("/product", productRoutes);
// router.use("/cart", cartRoutes);
// router.use("/order", orderRoutes);

module.exports = router;