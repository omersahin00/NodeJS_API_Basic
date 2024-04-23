const express = require("express");
const app = express();
const sequelize = require("./data/db");
const cors = require("cors");

// Routers:
const routes = require("./restApi/index");
app.use(routes);

// Middlewares:
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: "*"
}));

// Models:
require("./models/product");

// Sequelize:
(async () => {
    await sequelize.sync({ alter: true });
})();

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
