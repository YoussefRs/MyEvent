const mongoose = require('mongoose');
const { eventSchema } = require("./event");

const userSchema = new mongoose.Schema(
    {
        user_token: {
            type: String,
            required: true,
            unique: true,
        },
        reg_number: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
        },
        contactNumber: {
            type: String,
            required: true,
        },
        registredEvents: [eventSchema],
    },
    { timestamps : true}
);

module.exports = mongoose.model("User", userSchema)