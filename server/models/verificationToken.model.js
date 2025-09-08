import { DataTypes } from "sequelize";
import User from "./user.models.js";
import sequelize from "./db.js";

const VerificationToken = sequelize.define("VerificationToken", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default VerificationToken;
