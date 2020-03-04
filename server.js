const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/API/items")

const app = express();

// BodyParser Middleware

app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(()=> console.log("Mongo DB connected"))
    .catch (err => console.log (err));

// Use routes
app.use("api/items", items);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server corriendo en port ${port}`));
