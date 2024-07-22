import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

export class Contact extends Model {}
Contact.init(
  {
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  },
  { sequelize, modelName: "contact", freezeTableName: true }
);

// Sync models with database
sequelize.sync();
