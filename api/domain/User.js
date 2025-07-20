// domain/User.js
// Core business entity for a user (resident or admin)

class User {
  constructor({ id, name, email, passwordHash, flatNumber, role }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.flatNumber = flatNumber;
    this.role = role; // 'resident' or 'admin'
  }
}

module.exports = User;
