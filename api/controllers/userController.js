const userService = require('../services/userService');

class UserController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const token = await userService.register(name, email, password);
      res.status(201).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await userService.login(email, password);
      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getProfile(req, res) {
    try {
      const user = await userService.findById(req.user.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
