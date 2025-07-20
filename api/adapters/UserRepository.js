// adapters/UserRepository.js
// Adapter for user persistence (in-memory for now)

class UserRepository {
  constructor() {
    this.users = [];
  }

  async save(user) {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  async findByEmail(email) {
    return this.users.find(u => u.email === email);
  }
}

module.exports = UserRepository;
