const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            index: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            trim: true,
        },
        phoneNumber: {
            type: String,
            trim: true,
            unique: true,
            index: true,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
    },
    { timestamps: true }
);

module.exports = userSchema;