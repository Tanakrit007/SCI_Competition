import { DataTypes } from "sequelize";
import User from "./user.models.js";

const Judge = User.init({
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
});

export default Judge;
