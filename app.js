const express = require("express");
const app = express();
const sequelize = require("./data/db");

// Routers:
const routerProduct = require("./restApi/product/index");

// Middlewares:
app.use(express.json());
app.use("/api/product", routerProduct);

// Models:
require("./models/product");

// Sequelize:
(async () => {
    await sequelize.sync({ alter: true });
})();

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
