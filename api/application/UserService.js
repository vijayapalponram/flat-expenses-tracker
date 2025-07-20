// application/UserService.js
// Use case/service for user registration and authentication

const User = require('../domain/User');

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async registerUser(userData) {
    // Validate, hash password, and save user
    const user = new User(userData);
    return await this.userRepository.save(user);
  }

  async authenticate(email, password) {
    // Find user and verify password
    const user = await this.userRepository.findByEmail(email);
    if (!user) return null;
    // Password check logic here (to be implemented)
    return user;
  }
}

module.exports = UserService;
