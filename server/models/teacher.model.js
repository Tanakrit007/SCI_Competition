import { DataTypes } from "sequelize";
import User from "./user.models.js";

const Teacher = User.init(
  {
    school: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    scopes: {
      defayltScope: {
        where: { type: "teacher" },
      },
    },
    hook: {
      beforeCreate: (teacher) => {
        teacher.type = "teacher";
      },
    },
  }
);
export default Teacher;
