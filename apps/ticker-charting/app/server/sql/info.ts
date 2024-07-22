import { DataTypes, Model, Sequelize } from "sequelize";

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

export class Info extends Model {}

Info.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    dob: DataTypes.DATE,
  },
  { sequelize, modelName: "info", freezeTableName: true }
);

sequelize.sync();
