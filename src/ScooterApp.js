// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  static stations = {
    'Station 1': [],
    'Station 2': [],
    'Station 3': [],
  };

  registerUser(username, password, age) {
    // ScooterApp methods here
    if (age > 18 && !User.find(username)) {
      const user = new User(username, password, age);
      User.add(user);
      return 'user has been registered';
    } else {
      throw new Error('already registered or too young to register');
    }
  }
}
module.exports = ScooterApp;
