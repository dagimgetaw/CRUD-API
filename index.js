require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const productRoute = require("./routes/productRoutes");

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/product", productRoute);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
