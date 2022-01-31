const express = require("express")
const router = express.Router();

const User = require("../models/usermodel")

router.route("/create").post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const pass =  req.body.pass;
    const passconf = req.body.passconf;
    const newUser = new User({
        name,
        email,
        pass,
        passconf
    });
    newUser.save()
    console.log(newUser)
    console.log("inserted")
})

router.route("/login").post((req,res) => {
    
})

module.exports = router;
