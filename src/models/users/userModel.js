import userSchema from "./userSchema.js"

export const createNewUser = (obj) => {
    return userSchema(obj).save()
};