const userService = require('../services/userService');

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
    const token = await userService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id; 
    const user = await userService.getProfile(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
