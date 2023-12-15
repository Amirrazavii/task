const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./database.js");
const Report = sequelize.define(
  "Report",
  {
    headline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newsAgancy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    // Other model options go here
  }
);
module.exports = { Report };
