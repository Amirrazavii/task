const { sequelize } = require("./database.js");
const { Report } = require("./Report.js");

function database() {
  sequelize
    .sync()
    .then(() => {
      console.log("Database and tables created!");
    })
    .catch((error) => {
      console.error("Error creating database and tables:", error);
    });
}
module.exports = { database };
