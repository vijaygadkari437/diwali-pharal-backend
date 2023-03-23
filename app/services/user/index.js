const Models = require("../../models");

async function getUsers() {
    return userModel;
}

async function findUser(userId) {
    const user = await Models.User.findOne({ email: userId });
    if (!user) throw { status: 404, message: "User Not Found" };
    return user;
}

async function findUserById(userId) {
    const user = await Models.User.findOne({ _id: userId }, { password: 0 });
    if (!user) throw { status: 404, message: "User Not Found" };
    return user;
}

async function validateUserPassword({ userId, password }) {
    if (!userId) throw { status: 422, message: "Email is required." };
    let user = await findUser(userId);
    await user.comparePassword(password);
    user = user.toJSON();
    delete user.password;
    return user;
}

async function signupUser(params) {
    const { phoneNumber, email, password, name } = params;
    let errorMsg = "";
    if (!(phoneNumber && phoneNumber.trim())) errorMsg += "Phone No, ";
    if (!(email && email.trim())) errorMsg += "Email, ";
    if (!(password && password.trim())) errorMsg += "Password, ";
    if (!(name && name.trim())) errorMsg += "Name, ";
    if (errorMsg) throw { status: 422, message: errorMsg.substring(0, errorMsg.length - 2) + " is required." };
    const payload = { phoneNumber, email, password, name };
    return await new Models.User(payload).save();
}

module.exports = {
    getUsers,
    findUser,
    validateUserPassword,
    signupUser,
    findUserById,
};