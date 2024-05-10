const sequelize = require("../data/db");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Product;
