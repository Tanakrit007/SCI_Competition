import sequelize from "./db.js";
import Sequelize from "sequelize";

import User from "./user.models.js";
import Activity from "./activity.model.js";
import Teacher from "./teacher.model.js";
import Admin from "./admin.model.js";
import Judge from "./Judge.model.js";
import VerificationToken from "./verificationToken.model.js";

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Activity = Activity;
db.Teacher = Teacher;
db.Admin = Admin;
db.Judge = Judge;
db.VerificationToken = VerificationToken;

// Associations
db.VerificationToken.belongsTo(db.User, { foreignKey: "userId" });
db.User.belongTo(db.VerificationToken, { foreignKey: "userId" });

export default db;
