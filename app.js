const express = require("express");
const app = express();
const sequelize = require("./data/db");
const cors = require("cors");

// Middlewares:
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: "*"
}));

// Routers:
const routes = require("./restApi/index");
app.use(routes);

// Models:
require("./models/product");

// Sequelize:
(async () => {
    await sequelize.sync({ alter: true });
})();

app.listen(4000, () => {
    console.log("Listening on port 4000");
});
