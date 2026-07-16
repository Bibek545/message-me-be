import { hashPassword } from "../config/bcrypt.js";
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
