import { DataTypes } from "sequelize";
import User from "./user.models.js";

const Admibn = User.init({
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

export default Admibn;
