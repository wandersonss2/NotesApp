const userService = require('../services/userService');
const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const token = await userService.register(name, email, password);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(400).send({ error: 'Login failed! Check authentication credentials' });
        }
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getProfile = async (req, res) => {
    try {
        const userId = req.user._id; 
        const user = await userService.getProfile(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
