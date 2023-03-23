require("dotenv").config();

const express = require("express");
const app = express();
const dbConnect = require("./database")();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;

const controller = require("./app/controller/index");

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use("/api/v1", controller);

app.listen(PORT, function () {
    console.log("Server started at ", PORT);
});