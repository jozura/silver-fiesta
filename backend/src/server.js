require("dotenv").config();

const express = require("express");
const db = require("./db");
const path = require("path");



const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

require("./config/steam")(app);

app.use("/auth", require("./routes/auth.routes"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));