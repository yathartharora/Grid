const mongoose = require("mongoose")

const userSchema = {
    email: String,
    pass: String,
}

const Login = mongoose.model("Login", userSchema);

module.exports = Login;