const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 5000;

const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/order", require("./routes/orderRoutes"));
app.use("/api/menu", require("./routes/menuRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
