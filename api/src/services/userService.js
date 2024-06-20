const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

class UserService {
  async createUser(user) {
    return await userRepository.create(user);
  }

  async getAllUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id) {
    return await userRepository.findById(id);
  }

  async getUserByUsername(username) {
    return await userRepository.findByUsername(username);
  }

  async updateUser(id, user) {
    return await userRepository.update(id, user);
  }

  async deleteUser(id) {
    return await userRepository.delete(id);
  }

  async verifyPassword(user, password) {
    return await bcrypt.compare(password, user.password);
  }

  async generateToken(user) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Generated Token:', token); // Debugging line
    return token;
  }

}

module.exports = new UserService();
