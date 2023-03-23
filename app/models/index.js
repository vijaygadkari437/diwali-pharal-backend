const Mongoose = require("mongoose");

const userSchema = require("./user");
// const productSchema = require("./products");
// const cartSchema = require("./cart");
// const orderSchema = require("./checkout");

module.exports = {
    User: Mongoose.model("User", userSchema),
    // Product: Mongoose.model("Product", productSchema),
    // Cart: Mongoose.model("Cart", cartSchema),
    // Order: Mongoose.model("Order", orderSchema),
};