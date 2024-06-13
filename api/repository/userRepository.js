const User = require('../models/user');

class UserRepository {
  async findById(id) {
    return User.findById(id);
  }

  async findByEmail(email) {
    return User.findOne({ email });
  }

  async create(user) {
    return User.create(user);
  }
}

module.exports = new UserRepository();
