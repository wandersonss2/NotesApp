const User = require('../models/user'); // Assumindo que você tenha um modelo de usuário definido

class UserRepository {
  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findById(userId) {
    return await User.findById(userId);
  }
}

module.exports = new UserRepository();
