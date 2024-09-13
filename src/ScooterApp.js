const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  constructor() {
    this.stations = {
      'Station 1': [],
      'Station 2': [],
      'Station 3': [],
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username] || age < 18) {
      throw new Error('already registered or too young to register');
    }
    const user = new User(username, password, age);
    this.registeredUsers[username] = user;
    console.log('User has been registered');
    return user;
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error('Username or password is incorrect');
    }
    try {
      user.login(password);
      console.log('User has been logged in');
    } catch (error) {
      throw new Error('Username or password is incorrect');
    }
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user || !user.loggedIn) {
      throw new Error('no such user is logged in');
    }
    user.logout();
    console.log('user is logged out');
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error('no such station');
    }
    const scooter = new Scooter(station);
    this.stations[station].push(scooter);
    console.log('created new scooter');
    return scooter;
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error('no such station');
    }
    if (this.stations[station].includes(scooter)) {
      throw new Error('scooter already at station');
    }
    scooter.dock(station);
    this.stations[station].push(scooter);
    console.log('scooter is docked');
  }

  rentScooter(scooter, user) {
    for (const station in this.stations) {
      const index = this.stations[station].indexOf(scooter);
      if (index !== -1) {
        if (scooter.user) {
          throw new Error('scooter already rented');
        }
        this.stations[station].splice(index, 1);
        scooter.rent(user);
        console.log('scooter is rented');
        return;
      }
    }
    throw new Error('scooter not found at any station');
  }

  print() {
    console.log('Registered Users:');
    console.log(Object.keys(this.registeredUsers).join(', '));
    console.log('\nStations:');
    for (const [station, scooters] of Object.entries(this.stations)) {
      console.log(`${station}: ${scooters.length} scooters`);
    }
  }
}

module.exports = ScooterApp;
