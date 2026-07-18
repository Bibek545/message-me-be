import { comparePassword, hashPassword } from "../config/bcrypt.js";
import { generateToken } from "../config/jwt.js";
import { createNewUser } from "../models/users/userModel.js";
import User from "../models/users/userSchema.js";

export const insertNewUser = async (req, res) => {
  //fetching the user from the body
  const { fName, lName, email, phone, password, confirmPassword } = req.body;

  if (!fName || !lName || !email || !phone || !password || !confirmPassword) {
    return res.status(400).json({
      status: "error",
      message: "All the fields are required",
    });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(401).json({
      status: "error",
      message: "User already exist",
    });
  }

  const hashedPassword = await hashPassword(password);

  const obj = {
    fName,
    lName,
    email,
    password: hashedPassword,
  };

  await createNewUser(obj);
  console.log("User created successfully");

  return res.status(200).json({
    status: "success",
    message: "User created successfully",
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Missing fields",
    });
  }

  const findUser = await User.findOne({ email });
  if (!findUser) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  const compareLoginPassword = await comparePassword(
    password,
    findUser.password,
  );
  if (!compareLoginPassword) {
    return res.status(401).json({
      status: "error",
      message: "Password does not match",
    });
  }

  const token = generateToken(findUser);

  return res.send({
    message: "Login Successsful",
    token,
    status: "success",
    findUser,
  });
};
