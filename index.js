const express = require("express");
const cors = require("cors");

const categories = require("./routes/categories");
const sale = require("./routes/sale");
const order = require("./routes/order");
const products = require("./routes/products");

const sequelize = require("./database/database");
const Category = require("./database/models/category");
const Product = require("./database/models/product");

const app = express();

const PORT = process.env.PORT || 3333;
const CLIENT_URL = process.env.CLIENT_URL || "*";

Category.hasMany(Product);
Product.belongsTo(Category);

app.use(
  cors({
    origin: CLIENT_URL === "*" ? "*" : CLIENT_URL,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Pet Shop Backend API is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "pet-shop-backend",
  });
});

app.use("/categories", categories);
app.use("/products", products);
app.use("/sale", sale);
app.use("/order", order);

app.use((req, res) => {
  res.status(404).json({
    status: "ERR",
    message: "Route not found",
  });
});

const start = async () => {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

start();
