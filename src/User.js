class User {
  // User code here
  loggedIn = false;

  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
  }

  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error('incorrect password');
    }
  }

  logout() {
    this.loggedIn = false;
  }
}
module.exports = User;
