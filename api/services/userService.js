const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

class UserService {
  async register(name, email, password) {
    const user = await userRepository.create({ name, email, password });
    return this.generateToken(user);
  }

  async login(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user || !(await user.matchPassword(password))) {
      throw new Error('Invalid credentials');
    }
    return this.generateToken(user);
  }

  generateToken(user) {
    return jwt.sign({ id: user._id, email: user.email }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });
  }
}

module.exports = new UserService();
