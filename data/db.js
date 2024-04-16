const Sequelize = require("sequelize");
const Config = require("../constants/config");

const sequelize = new Sequelize(Config.db.database, Config.db.user, Config.db.password, {
    host: Config.db.host,
    dialect: "mysql",
    define: {
        timestamps: false
    },
    storage: "./session/mysql"
});

connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySQL Server connection was established.");
    }
    catch (error) {
        console.log("Connection loss: ", error);
    }
}

connect();

module.exports = sequelize;