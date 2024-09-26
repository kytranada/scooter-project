const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp()
// ScooterApp tests here

// register user
describe('registerUser method tests', () => {
  test('Should return instance of User', () => {
    const response = scooterApp.registerUser('Joe Bloggs', 'test123', 21)
    expect(response).toBeInstanceOf(User)
  })
  test("Should throw error if already registered or under 18", () => {
    expect(()=>{
      scooterApp.registerUser('Baby Bloggs', 'test123', 3)
    }).toThrow(Error)
  })
})

// log in
describe('loginUser method tests', () => {
  scooterApp.registerUser('Trinity', 'test123', 23)
  test('throws error if username is wrong',()=> {
    expect(()=>{
      scooterApp.loginUser('Xrinity', 'test123')
    }).toThrowError()
  })
  test('throws error if password is wrong',()=> {
    expect(()=>{
      scooterApp.loginUser('Trinity', 'adad')
    }).toThrowError()
  })
})

// log out
describe('logoutUser method tests', () => {
  scooterApp.registerUser('Rad Raddington', 'test123', 45)
  test('throws error if user isnt already logged in',()=> {
    expect(()=>{
      scooterApp.logoutUser('Rad Raddington', 'test123')
    }).toThrowError()
  })
  scooterApp.loginUser('Rad Raddington', 'test123')
  scooterApp.logoutUser('Rad Raddington')
  test('logs out user',()=> {
    expect(()=>{
      scooterApp.logoutUser('Rad Raddington')
    }).toThrowError()
  })
})


// rent scooter
describe('Rent Scooter method tests', () => {

}).

// dock scooter
describe('Dock Scooter method tests', () => {
  test("Throws no such station error if the station does not exist",()=> {
    expect(()=>{
      scooterApp.dockScooter()
    }).toThrowError()
  })
})