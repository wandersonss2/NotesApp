// src/repositories/userRepository.js
const User = require('../models/userModel');

class UserRepository {
  async create(user) {
    return await User.create(user);
  }

  async findAll() {
    return await User.find();
  }

  async findById(id) {
    return await User.findById(id);
  }

  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async update(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
