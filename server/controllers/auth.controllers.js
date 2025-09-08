import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config.js";
import db from "../models/index.js";
import crypto from "crypto";

const User = db.User;

//Register
const sigup = async (req, res) => {
  const { email, password, type, name } = req.body;
  try {
    //Checlk validation request
    if (!email || !password || !type || !name) {
      return res.status(400).send({ message: "ข้อมูลไม่ครบ" });
    }

    const allowNullType = ["admin", "teacher", "judge"];
    if (!allowNullType.includes(type)) {
      return res.status(400).send({
        message:
          "ข้อมูลประเภทผู้ใช้ไม่ถูกต้องต้องเป็น admin , teacher หรือ judge",
      });
    }

    if (type === "teacher" && (!school || !phone)) {
      return res
        .status(400)
        .send({ message: "ข้อมูลไม่ครบอาจารย์ต้องใส่ school และ phone ด้วย" });
    }

    //check if user already exists
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).send({ message: "โง่เอ้ยเขาใช้ email นี้ไปแล้ว" });
    }

    //Create user object based on type
    const userData = {
      name: name,
      email: email,
      password: password,
      type: type,
    };
    if (type === "teacher") {
      userData.school = school;
      userData.phone = phone;
    }

    //create new user
    const newUser = await User.create(userData);

    //If user is a teacher, create and send verification email
    if (type === "teacher") {
      try {
        //create verification token
        const token = crypto.randomBytes(32).toString("hex");
        const verification = await db.VerificationToken.create({
          token: token,
          userId: user.id,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 hour
        });
      } catch (error) {}
    }

    res.status(201).send({
      message:
        userData.type === "teacher"
          ? "Registration successful. Please verify your email."
          : "User Registration successful.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.type,
        ...(user.type === "teacher" && {
          school: user.school,
          phone: user.phone,
        }),
      },
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
