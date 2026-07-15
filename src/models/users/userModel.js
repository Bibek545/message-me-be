import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            required: true,
        },
        lName: {
            type: String,
            required: true,
        },
         email: {
            type: String,
            required: true,
            unique: true,
            index: 1,
         },
         phone: {
            type: String,
         },
         password: {
            type: String,
            required: true
         },

         confirmPassword: {
            type: String,
         }
    }, {
        timestamps: true,
    },
);

export default mongoose.model("User", userSchema);