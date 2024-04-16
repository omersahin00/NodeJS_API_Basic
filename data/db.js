const Sequelize = require("sequelize");
const Config = require("../constants/config");

const sequelize = new Sequelize(Config.db.database, Config.db.user, Config.db.password, {
    host: Config.db.host,
    dialect: "mssql",
    define: {
        timestamps: false
    },
    storage: "./session/mssql"
});

connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("MsSQL Server connection was established.");
    }
    catch (error) {
        console.log("Connection loss: ", error);
    }
}

connect();

module.exports = sequelize;