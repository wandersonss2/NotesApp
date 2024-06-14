const User = require('../models/user');

const register = async (name, email, password) => {
    const user = new User({ name, email, password });
    await user.save();
    const token = await user.generateAuthToken();
    return token;
};

const getProfile = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

module.exports = {
    register,
    getProfile,
};
