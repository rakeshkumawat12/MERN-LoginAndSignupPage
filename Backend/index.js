const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes")
const cookieParser = require("cookie-parser")
const cors = require("cors")

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use("/api", router)

mongoose.connect("mongodb+srv://admin:{process.env.MONGODB_PASSWORD}@cluster0.nghql.mongodb.net/auth?retryWrites=true&w=majority")
    .then(() => {
        app.listen(3000);
        console.log("Database is connected! Listening to Localhost 3000");
    })
    .catch((err) => console.log(err));
