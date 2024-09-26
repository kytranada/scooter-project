const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp');
const Scooter = require('../src/Scooter');

const scooterApp = new ScooterApp();

// ScooterApp tests here

// register user
describe('registerUser method tests', () => {
  test('Should return instance of User', () => {
    const response = scooterApp.registerUser('Joe Bloggs', 'test123', 21);
    expect(response).toBeInstanceOf(User);
  });
  test('Should throw error if already registered or under 18', () => {
    expect(() => {
      scooterApp.registerUser('Baby Bloggs', 'test123', 3);
    }).toThrow(Error);
  });
});

// log in
describe('loginUser method tests', () => {
  scooterApp.registerUser('Trinity', 'test123', 23);
  test('throws error if username is wrong', () => {
    expect(() => {
      scooterApp.loginUser('Xrinity', 'test123');
    }).toThrowError();
  });
  test('throws error if password is wrong', () => {
    expect(() => {
      scooterApp.loginUser('Trinity', 'adad');
    }).toThrowError();
  });
  test('logs in user with correct credentials', () => {
    expect(() => {
      scooterApp.loginUser('Trinity', 'test123');
    }).not.toThrowError();
  });
});

// log out
describe('logoutUser method tests', () => {
  scooterApp.registerUser('Rad Raddington', 'test123', 45);
  test('throws error if user isnt already logged in', () => {
    expect(() => {
      scooterApp.logoutUser('Rad Raddington', 'test123');
    }).toThrowError();
  });
  scooterApp.loginUser('Rad Raddington', 'test123');
  scooterApp.logoutUser('Rad Raddington');
  test('logs out user', () => {
    expect(() => {
      scooterApp.logoutUser('Rad Raddington');
    }).toThrowError();
  });
});

// create scooter
describe('createScooter method tests', () => {
  test('creates a new scooter at a valid station', () => {
    const scooter = scooterApp.createScooter('Station 1');
    expect(scooter).toBeInstanceOf(Scooter);
    expect(scooterApp.stations['Station 1']).toContain(scooter);
  });
  test('throws error if station does not exist', () => {
    expect(() => {
      scooterApp.createScooter('Invalid Station');
    }).toThrowError('no such station');
  });
});

// rent scooter
describe('rentScooter method tests', () => {
  const user = new User('John Doe', 'password', 25);
  const scooter = new Scooter('Station 1');
  scooterApp.dockScooter(scooter, 'Station 1');
  test('rents scooter to user if available', () => {
    scooterApp.rentScooter(scooter, user);
    expect(scooter.user).toBe(user);
    expect(scooterApp.stations['Station 1']).not.toContain(scooter);
  });
});

// dock scooter
describe('dockScooter method tests', () => {
  const scooter = new Scooter('Station 1');
  test('Throws no such station error if the station does not exist', () => {
    expect(() => {
      scooterApp.dockScooter(scooter, 'Invalid Station');
    }).toThrowError('no such station');
  });
  test('Throws error if scooter already at station', () => {
    scooterApp.dockScooter(scooter, 'Station 1');
    expect(() => {
      scooterApp.dockScooter(scooter, 'Station 1');
    }).toThrowError('scooter already at station');
  });
  test('Docks scooter at valid station', () => {
    const newScooter = new Scooter('Station 2');
    scooterApp.dockScooter(newScooter, 'Station 2');
    expect(scooterApp.stations['Station 2']).toContain(newScooter);
  });
});
