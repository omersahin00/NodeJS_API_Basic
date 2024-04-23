const express = require("express");
const app = express();
const sequelize = require("./data/db");

// Routers:
const routes = require("./restApi/index");

// Middlewares:
app.use(express.json());
app.use(routes);

// Models:
require("./models/product");

// Sequelize:
(async () => {
    await sequelize.sync({ alter: true });
})();

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
