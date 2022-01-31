const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json())
mongoose.connect("mongodb+srv://yatharth:yatharth@cluster0.mvsu9.mongodb.net/UserDatabase?retryWrites=true&w=majority")


app.use("/", require("./route/userRoute"));

app.listen(3001, function() {
    console.log("Express server is running on port 3001")
})